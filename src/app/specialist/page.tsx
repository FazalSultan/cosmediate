"use client";
import React, { useState } from "react";
import DoctorData from "../../doctorsinformation.json";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckboxReactHookFormMultiple } from "@/components/doctor-sidebar-filter";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function Specialist() {
  // const res = useSearchParams().get("doctorname")?.trim().toLowerCase();
  const searchValue =
    useSearchParams().get("doctorname")?.trim().toLowerCase() || "";

  const initialFilteredData =
    searchValue === ""
      ? DoctorData
      : DoctorData.filter(
          (value) =>
            value.full_name.toLowerCase().includes(searchValue) ||
            value.email.toLowerCase().includes(searchValue) ||
            value.gender.toLowerCase() === searchValue ||
            value.address.toLowerCase().includes(searchValue)
        );

  const [isShow, setShow] = useState(true);
  const [filteredData, setFilteredData] = useState(initialFilteredData);

  return (
    <div className="bg-[#f9f9f9] min-h-screen px-6 py-6 md:flex md:gap-6 bg-[url(/bg-main.svg)] bg-no-repeat bg-cover bg-center">
      {/* Sidebar Toggle for Mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <Button
          variant="default"
          className="bg-blue-600"
          onClick={() => setShow((prev) => !prev)}
        >
          {isShow ? "Hide Filter" : "Show Filter"}
        </Button>
      </div>

      {/* Sidebar */}
      {isShow && (
        <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0 md:px-4">
          <CheckboxReactHookFormMultiple onFilter={setFilteredData} />
        </div>
      )}

      {/* Main Content */}
      <div className="w-full md:w-2/3 lg:w-3/4 mx-auto">
        <div className="mb-6">
          <form
            method="GET"
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Label
              htmlFor="doctorname"
              className="text-base font-medium hidden md:block"
            >
              Search:
            </Label>
            <Input
              type="text"
              id="doctorname"
              name="doctorname"
              placeholder="Doctorname, Gender, Address..."
              className="w-full sm:w-[400px] px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={""}
            />
          </form>
        </div>

        {/* No Data Found */}
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

        {/* Doctor Cards */}
        {/* <div className="grid grid-cols-1 gap-6">
          {filteredData.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-xl shadow-md flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 hover:shadow-lg transition  delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105  hover:bg-blue-600  hover:-translate-x-5"
            >
              <div className="flex-1 space-y-2 text-center lg:text-left">
                <p className="text-xl font-semibold text-gray-800 ">
                  {val.full_name}
                </p>
                <p className="text-gray-600">Email: {val.email}</p>
                <p className="text-gray-600">Gender: {val.gender}</p>
                <p className="text-gray-600">Fees: {val.fees}</p>
                <p className="text-gray-600">Specialist: {val.specialist}</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Image
                  src={val.image}
                  alt={val.full_name}
                  width={200}
                  height={200}
                  className="rounded-full w-[200px] h-[200px]  mx-auto object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 gap-6">
          {filteredData.map((val) => (
            <div
              key={val.id}
              className="group bg-white rounded-xl shadow-md flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 hover:shadow-lg transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:-translate-x-5"
            >
              <div className="flex-1 space-y-2 text-center lg:text-left">
                <p className="text-xl font-semibold text-gray-800 group-hover:text-white">
                  {val.full_name}
                </p>
                <p className="text-gray-600 group-hover:text-white">
                  Email: {val.email}
                </p>
                <p className="text-gray-600 group-hover:text-white">
                  Gender: {val.gender}
                </p>
                <p className="text-gray-600 group-hover:text-white">
                  Fees: {val.fees}
                </p>
                <p className="text-gray-600 group-hover:text-white">
                  Specialist: {val.specialist}
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Image
                  src={val.image}
                  alt={val.full_name}
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
