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

// Define the filter options
const treatmentItems = {
  TreatmentName: [
    "Physical Therapy",
    "Chemotherapy",
    "Dialysis",
    "Cardiac Bypass Surgery",
    "Cosmetic Surgery",
  ],
  Cost: ["500", "1500", "5000", "20000"],
  Duration: ["5", "10", "30", "60", "90"],
};

// Define form schema
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

  // Function to apply filter
  const applyFilter = (data: z.infer<typeof FilterSchema>) => {
    const selected = data.filters.map((val) => val.toLowerCase());

    const selectedNames = treatmentItems.TreatmentName.map((t) => t.toLowerCase());
    const selectedCosts = treatmentItems.Cost.map((c) => c.toLowerCase());
    const selectedDurations = treatmentItems.Duration.map((d) => d.toLowerCase());

    const nameFilters = selected.filter((val) => selectedNames.includes(val));
    const costFilters = selected.filter((val) => selectedCosts.includes(val));
    const durationFilters = selected.filter((val) => selectedDurations.includes(val));

    const filtered = TreatmentRecords.filter((t) => {
      const nameMatch = nameFilters.length === 0 || nameFilters.includes(t.treatment_name.toLowerCase());
      const costMatch = costFilters.length === 0 || costFilters.includes(String(t.cost).toLowerCase());
      const durationMatch = durationFilters.length === 0 || durationFilters.includes(String(t.duration).toLowerCase());

      // Only return records that match ALL selected filters
      return nameMatch && costMatch && durationMatch;
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
                            const updated = checked
                              ? [...field.value, opt]
                              : field.value.filter((v: string) => v !== opt);
                            field.onChange(updated);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">{opt}</FormLabel>
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
              onFilter(TreatmentRecords); // Show all if cleared
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
