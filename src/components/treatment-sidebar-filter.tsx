"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TreatmentRecords from "../treatmentrecords.json";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const treatmentItems = {
  TreatmentName: [
    "Physical Therapy",
    "Chemotherapy",
    "Dialysis",
    "Cardiac Bypass Surgery",
    "Cosmetic Surgery",
  ],
  Cost: ["500", "1500", , "5000",  "20000"],
  Duration: [ "5", "10", "30", "60", "90"],
};

const FilterSchema = z.object({
  filters: z.array(z.string()).min(1, "Select at least one filter."),
});

export function TreatmentFilterSidebar({
  onFilter,
}: {
  onFilter: (data: typeof TreatmentRecords) => void;
}) {
  const form = useForm<z.infer<typeof FilterSchema>>({
    resolver: zodResolver(FilterSchema),
    defaultValues: { filters: [] },
  });

  const applyFilter = (data: z.infer<typeof FilterSchema>) => {
    const selected = data.filters;

    const filtered = TreatmentRecords.filter((val) => {
      const nameMatch = selected.includes(val.treatment_name);
      const costMatch = selected.includes(String(val.cost));
      const durationMatch = selected.includes(String(val.duration));
      return nameMatch || costMatch || durationMatch;
    });

    onFilter(filtered);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(applyFilter)} className="space-y-6">
        {Object.entries(treatmentItems).map(([category, options]) => (
          <div key={category}>
            <FormLabel className="text-base font-semibold">{category}</FormLabel>
            <div className="space-y-2 mt-2">
              {options.map((opt) => (
                <FormField
                  key={opt}
                  name="filters"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(opt)}
                          onCheckedChange={(checked) => {
                            const newValues: string[] = checked
                              ? [...field.value as string[], opt as string]
                              : (field.value as string[]).filter((v: string) => v !== opt);
                            field.onChange(newValues);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {opt}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>
        ))}

        <FormMessage />
        <div className="flex gap-2 mt-4">
          <Button
            type="button"
            className="bg-red-500"
            onClick={() => {
              form.reset();
              onFilter(TreatmentRecords); // Reset full list
            }}
          >
            Clear
          </Button>
          <Button type="submit" className="bg-blue-600">
            Apply Filter
          </Button>
        </div>
      </form>
    </Form>
  );
}
