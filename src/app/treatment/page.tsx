"use client";
import React, { useState } from "react";
import TreatmentRecords from "../../treatmentrecords.json";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TreatmentFilterSidebar } from "@/components/treatment-sidebar-filter";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Treatment() {
  const res = useSearchParams()
    .get("treatmentname")
    ?.trim()
    .toLocaleLowerCase();

  const initialFiltered =
    !res || res === ""
      ? TreatmentRecords
      : TreatmentRecords.filter((val) =>
          val.treatment_name.toLowerCase().includes(res)
        );

  const [filteredData, setFilteredData] = useState(initialFiltered);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="min-h-screen px-5 py-6 md:flex md:gap-6 bg-[url(/bg-main.svg)] bg-no-repeat bg-cover bg-center">
      {/* Sidebar Toggle Button */}
      <div className="md:hidden flex justify-end mb-4 w-full">
        <Button
          variant="default"
          className="bg-blue-600"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {showSidebar ? "Hide Filter" : "Show Filter"}
        </Button>
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div className="w-full md:w-64 md:px-6 mb-4 md:mb-0">
          <TreatmentFilterSidebar onFilter={setFilteredData} />
        </div>
      )}

      {/* Main Content */}
      <div className="w-full">
        {/* Search Form */}
        <div className="mb-8">
          <form
            id="treatmentform"
            method="GET"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Label
              htmlFor="treatmentname"
              className="text-lg font-medium hidden md:block"
            >
              Search:
            </Label>
            <Input
              type="text"
              id="treatmentname"
              name="treatmentname"
              className="w-full sm:w-[400px] px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Treatment name..."
              defaultValue={res || ""}
            />
          </form>
        </div>

        {/* No Records Message */}
        {filteredData.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No Results Found
            </h2>
            <p className="text-gray-500 mb-4">
              We could not find any doctors matching your current filters.
            </p>
            {/* <Button
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => window.location.reload()}
            >
              Clear Filters & Try Again
            </Button> */}
          </div>
        )}

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredData.map((val) => (
            // <div
            //   key={val.id}
            //   className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg flex flex-col lg:flex-row justify-between items-start gap-4 transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:-translate-x-4 "
            // >
            //   <div className="flex-1 space-y-3 text-gray-800 ">
            //     <h2 className="text-2xl font-semibold group-hover:text-white">{val.treatment_name}</h2>
            //     <p>
            //       <span className="font-medium">Cost:</span> {val.cost}
            //     </p>
            //     <p>
            //       <span className="font-medium">Duration:</span> {val.duration}{" "}
            //       days
            //     </p>
            //     <p>
            //       <span className="font-medium">Status:</span> {val.status}
            //     </p>
            //     <p>
            //       <span className="font-medium">Doctor:</span>{" "}
            //       {val.doctor_assigned}
            //     </p>
            //     <p>
            //       <span className="font-medium">Description:</span>{" "}
            //       {val.description}
            //     </p>
            //   </div>
            //   <div className="mt-4 lg:mt-0">
            //     <Image
            //       src="/cosmatic.jpg"
            //       alt={val.treatment_name}
            //       width={200}
            //       height={200}
            //       className="rounded-full w-[200px] h-[200px]  mx-auto object-cover"
            //       priority
            //     />
            //   </div>
            // </div>
            <div
              key={val.id}
              className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg flex flex-col lg:flex-row justify-between items-start gap-4 transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:-translate-x-4"
            >
              <div className="flex-1 space-y-3 text-gray-800 group-hover:text-white">
                <h2 className="text-2xl font-semibold">{val.treatment_name}</h2>
                <p>
                  <span className="font-medium">Cost:</span> {val.cost}
                </p>
                <p>
                  <span className="font-medium">Duration:</span> {val.duration}{" "}
                  days
                </p>
                <p>
                  <span className="font-medium">Status:</span> {val.status}
                </p>
                <p>
                  <span className="font-medium">Doctor:</span>{" "}
                  {val.doctor_assigned}
                </p>
                <p>
                  <span className="font-medium">Description:</span>{" "}
                  {val.description}
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Image
                  src="/cosmatic.jpg"
                  alt={val.treatment_name}
                  width={200}
                  height={200}
                  className="rounded-full w-[200px] h-[200px] mx-auto object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
