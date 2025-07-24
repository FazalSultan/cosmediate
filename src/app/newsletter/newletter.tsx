import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-10">
          Stay informed with the latest news, updates, and exclusive offers.
          Enter your details below.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <Label htmlFor="name" className="block mb-1 text-gray-800 font-bold">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="email" className="block mb-1 text-gray-800 font-bold">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full  border-2 border-red-foreground"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-[#0D5AE5] hover:bg-[#0b4cc1] px-8 py-4 text-white font-medium text-sm rounded-lg cursor-pointer "
            >
              Subscribe Now
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
