import React from "react";

export default function Testimonial() {
  return (
    <section className="bg-[#1344fe] text-white py-20 md:px-10 px-3 ">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Lovely People Talk About Us
        </h2>
      <div className="container mx-auto">
        <p className="text-2xl  font-medium  ">
          &quot;Medcard&apos;s dental care team transformed my smile and boosted
          my confidence. I used to dread going to the dentist, but the friendly
          and gentle approach of the dentists at Medicine put me at ease —
          outstanding care!&quot;
        </p>
        <div className="mt-6">
          <h3 className="font-bold text-lg">Ronald Richards</h3>
          <p className="text-sm text-gray-200">CEO of ABC Company</p>
        </div>
      </div>
    </section>
  );
}
