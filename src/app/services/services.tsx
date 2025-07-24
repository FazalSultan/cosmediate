import Image from "next/image";

export default function ServicesSection() {
  const services = [
    { title: "General Treatment", icon: "/doctor.png" },
    { title: "Eye Specialist", icon: "/doctor.png" },
    { title: "Radiology", icon: "/doctor.png" },
    { title: "Dentist", icon: "/crackTeeth.png" },
    { title: "Dermatologist", icon: "/dermatologist.png" },
    { title: "Cardiologist", icon: "/doctor.png" },
  ];

  return (
    <section className="bg-[#f3f2f9] py-16">
      <div className="md:px-10 mx-auto px-3">
        <h2 className="text-3xl md:text-5xl font-bold text-[#06070d] text-center mb-12 leading-tight">
          The Best Services for Your Family
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#06070d]">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empower employees to seek care without worrying about paying all at once.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
