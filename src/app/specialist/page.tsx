"use client";
import React, { useState } from "react";
import DoctorData from "../../doctorsinformation.json";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckboxReactHookFormMultiple } from "@/components/doctor-sidebar-filter";
import { Button } from "@/components/ui/button";

export default function Specialist({
  searchParams,
}: {
  searchParams: { doctorname?: string };
}) {
  const res = searchParams.doctorname?.trim().toLowerCase();

  const initialFilteredData =
    !res || res === ""
      ? DoctorData
      : DoctorData.filter(
          (value) =>
            value.full_name.split(" ")[0].toLowerCase() === res ||
            value.full_name.trim().toLowerCase() === res ||
            value.email.toLowerCase() === res ||
            value.gender.toLowerCase() === res ||
            value.address.toLowerCase() === res
        );
  const [isShow, setShow] = useState(true);
  const [filteredData, setFilteredData] = useState(initialFilteredData);

  return (
    <div className="mainLayout bg-[#f9f9f9] min-h-screen py-10 px-4 md:flex md:gap-4 ">
      <Button
        variant="default"
        className="md:hidden float-right bg-blue-600 ml-4"
        onClick={() => setShow((prev) => !prev)}
      >
        {isShow ? "Hide Filter" : "Show Filter"}
      </Button>
      {isShow && (
        <div className="filterContent md:h-screen md:w-50 w-full md:px-8 ">
          <CheckboxReactHookFormMultiple onFilter={setFilteredData} />
        </div>
      )}
      <div className="max-w-5xl mx-auto ">
        <div className="mb-8">
          <form
            method="GET"
            className="flex flex-colsm:flex-row items-center gap-4 "
          >
            <Label
              htmlFor="doctorname"
              className="text-lg font-medium md:flex hidden"
            >
              Search:
            </Label>
            <Input
              type="text"
              id="doctorname"
              name="doctorname"
              className="w-full sm:w-[400px] px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Doctorname, Gender, Address..."
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
              className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between p-5 hover:shadow-lg transition"
            >
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <p className="text-xl font-semibold text-gray-800">
                  {val.full_name}
                </p>
                <p className="text-gray-600">Email: {val.email}</p>
                <p className="text-gray-600">Address: {val.address}</p>
                <p className="text-gray-600">Gender: {val.gender}</p>
                <p className="text-gray-600">Fees: {val.fees}</p>
                <p className="text-gray-600">Specialist: {val.specialist}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Image
                  src={val.image}
                  alt={val.full_name}
                  width={130}
                  height={100}
                  className="rounded-lg object-cover w-[100px] h-auto "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
