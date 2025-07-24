"use client";
import React, { useState } from "react";
import TreatmentRecords from "../../treatmentrecords.json";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TreatmentFilterSidebar } from "@/components/treatment-sidebar-filter";
import { Button } from "@/components/ui/button";

export default function Treatment({
  searchParams,
}: {
  searchParams: { treatmentname?: string };
}) {
  const res = searchParams.treatmentname?.trim().toLowerCase();

  const initialFiltered =
    !res || res === ""
      ? TreatmentRecords
      : TreatmentRecords.filter((val) =>
          val.treatment_name.toLowerCase().includes(res)
        );

  const [filteredData, setFilteredData] = useState(initialFiltered);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="mainLayout bg-[#f9f9f9] min-h-screen py-10 px-4 md:flex md:gap-4">
      <Button
        variant="default"
        className="md:hidden float-right bg-blue-600 ml-4"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? "Hide Filter" : "Show Filter"}
      </Button>

      {showSidebar && (
        <div className="md:h-screen md:w-64 w-full md:px-6 mb-4 md:mb-0">
          <TreatmentFilterSidebar onFilter={setFilteredData} />
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <form
            method="GET"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Label htmlFor="treatmentname" className="text-lg font-medium md:flex hidden">
              Search:
            </Label>
            <Input
              type="text"
              id="treatmentname"
              name="treatmentname"
              className="w-full sm:w-[400px] px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="treatment name..."
              defaultValue={res || ""}
            />
          </form>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center font-bold bg-red-400 text-white rounded py-5 px-4">
            Search Not Found 😒👀, Let&apos;s try again 😉✨
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredData.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <p className="text-xl font-semibold text-gray-800">
                {val.treatment_name}
              </p>
              <p className="text-gray-600">Cost: {val.cost}</p>
              <p className="text-gray-600">Duration: {val.duration} days</p>
              <p className="text-gray-600">Status: {val.status}</p>
              <p className="text-gray-600">Doctor: {val.doctor_assigned}</p>
              <p className="text-gray-600">Description: {val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
