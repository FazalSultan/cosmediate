import React from "react";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import Image from "next/image";

const doctors = [
  { name: "Dr. Ayesha Khan", role: "Dentist", image: "/servicesimage.jpg" },
  { name: "Dr. Hamza Ali", role: "Cardiologist", image: "/servicesImage2.webp" },
  { name: "Dr. Sana Rehman", role: "Dermatologist", image: "/servicesimage.jpg" },
  { name: "Dr. Ahmed Raza", role: "Pediatrician", image: "/servicesImage2.webp" },
];

export default function Doctor() {
  return (
    <section className="bg-[#f9f9fb] py-16 w-full md:px-10 px-3">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#06070d] leading-tight md:leading-[1.3]">
            Meet Our High Quality & <br className="hidden md:block" />
            Expert Doctors
          </h2>
          <p className="text-gray-700 md:max-w-md text-base md:text-lg leading-relaxed">
            Nibble healthcare eliminates financial barriers to healthcare
            for employees, allowing them to access care without compromise.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Card key={index} className="p-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={600}
                  height={400}
                  className="rounded-t w-full h-[300px] object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col text-center py-4">
                <p className="font-semibold text-lg text-[#06070d]">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
