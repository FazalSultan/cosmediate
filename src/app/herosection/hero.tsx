import React from "react";
import { Button } from "@/components/ui/button";
import { SiNike, SiApple, SiNewbalance } from "react-icons/si";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section className="bg-[#1344fe] text-white md:py-20 sm:py-13 md:h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center ">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Quality Healthcare <br className="hidden sm:block" />
              Solution For All
            </h1>
            <p className="text-lg text-[#e0e0e0] leading-relaxed mb-8">
              Nibble Health eliminates financial barriers to healthcare for
              employees, allowing them to access trusted, high-quality services
              without stress.
            </p>

            <Button className="rounded-full px-8 py-5 bg-[#fe5bbd] hover:bg-[#f944a9] transition-all duration-300 text-white text-sm font-semibold shadow-lg cursor-pointer">
              Book an Appointment
            </Button>

            {/* Avatars */}
            <div className="flex items-center mt-10 space-x-2">
              {[1, 2, 3, 4].map((_, i) => (
                <Avatar key={i} className={`border-2 border-white ${i !== 0 ? "-ml-3" : ""}`}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
              <span className="ml-4 text-white text-base">
                <span className="font-bold">6.2K+</span> Happy Customers
              </span>
            </div>

            {/* Sponsors */}
            <div className="mt-10">
              <p className="text-sm text-white mb-2">Supported by:</p>
              <div className="flex flex-wrap items-center gap-6 text-white text-lg">
                <SiNike className="w-7 h-7" />
                <div className="flex items-center gap-1">
                  <SiApple className="w-7 h-7" />
                  <span>WATCH</span>
                </div>
                <SiNewbalance className="w-7 h-7" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end ">
            <Image
              src="/heroImage.png"
              alt="doctor"
              width={500}
              height={100}
              className="rounded-2xl w-full max-[500px] h-[400px] object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
