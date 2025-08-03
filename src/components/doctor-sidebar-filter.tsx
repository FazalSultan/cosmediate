"use client";

import DoctorData from "@/doctorsinformation.json";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

// Filter Options Grouped
const items = [
  {
    category: "Gender",
    options: [
      { id: "male", label: "Male" },
      { id: "female", label: "Female" },
      { id: "polygender", label: "Polygender" },
      { id: "genderfluid", label: "Genderfluid" },
    ],
  },
  {
    category: "Fees",
    options: [
      { id: "500", label: "500" },
      { id: "1000", label: "1000" },
      { id: "2000", label: "2000" },
    ],
  },
  {
    category: "Specialist",
    options: [
      { id: "eyes", label: "Eyes" },
      { id: "skin", label: "Skin" },
      { id: "radiology", label: "Radiology" },
      { id: "plastic surgery", label: "Plastic Surgery" },
      { id: "dermatology", label: "Dermatology" },
      { id: "cardiology", label: "Cardiology" },
    ],
  },
] as const;

// Zod validation
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one item.",
  }),
});

export function CheckboxReactHookFormMultiple({
  onFilter,
}: {
  onFilter: (filtered: typeof DoctorData) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  // ✅ Grouped Filtering Logic
  function handleFoundSearch(selectedItems: string[]) {
    const genderFilters = ["male", "female", "polygender", "genderfluid"];
    const feesFilters = ["500", "1000", "2000"];
    const specialistFilters = [
      "eyes",
      "skin",
      "radiology",
      "plastic surgery",
      "dermatology",
      "cardiology",
    ];

    const selectedGender = selectedItems.filter((item) =>
      genderFilters.includes(item)
    );
    const selectedFees = selectedItems.filter((item) =>
      feesFilters.includes(item)
    );
    const selectedSpecialist = selectedItems.filter((item) =>
      specialistFilters.includes(item)
    );

    const updatedResult = DoctorData.filter((doc) => {
      const genderMatch =
        selectedGender.length === 0 ||
        selectedGender.includes(doc.gender.toLowerCase());
      const feesMatch =
        selectedFees.length === 0 || selectedFees.includes(doc.fees);
      const specialistMatch =
        selectedSpecialist.length === 0 ||
        selectedSpecialist.includes(doc.specialist.toLowerCase());

      return genderMatch && feesMatch && specialistMatch;
    });

    onFilter(updatedResult);
  }

  // Form submit
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">
            {JSON.stringify(data.items, null, 2)}
          </code>
        </pre>
      ),
    });

    const selectedValues = data.items.map((v) => v.toLowerCase());
    handleFoundSearch(selectedValues);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-semibold">
                  Advance Search
                </FormLabel>
                <FormDescription>
                  Filter the doctors by the below options
                </FormDescription>
              </div>

              {items.map((group) => (
                <div key={group.category} className="mb-4">
                  <FormLabel className="text-sm font-semibold">
                    {group.category}
                  </FormLabel>
                  <div className="space-y-2 mt-2">
                    {group.options.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  item.id.toLowerCase()
                                )}
                                onCheckedChange={(checked) => {
                                  const value = item.id.toLowerCase();
                                  return checked
                                    ? field.onChange([...field.value, value])
                                    : field.onChange(
                                        field.value.filter((v) => v !== value)
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button
            type="button"
            className="bg-red-500 rounded-full"
            onClick={() => {
              form.reset();
              onFilter(DoctorData); // Reset to all doctors
            }}
          >
            Clear
          </Button>
          <Button type="submit" className="bg-blue-600 rounded-full">
            Apply filter
          </Button>
        </div>
      </form>
    </Form>
  );
}
