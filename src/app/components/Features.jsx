import Image from "next/image";
import { useMemo } from "react";

export default function Features() {
  const features = useMemo(
    () => [
      {
        id: 1,
        image: "/images/feature/download.svg",
        title: "Lower Cost of Ownership",
        description:
          "No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.",
      },
      {
        id: 2,
        image: "/images/feature/grid.svg",
        title: "Higher Agent Occupancy",
        description:
          "Real-time and historical agent scorecards to improve agent occupancy.",
      },
      {
        id: 3,
        image: "/images/feature/lighting.svg",
        title: "First Contact Resolution",
        description:
          "MImInize rebeat callers. handle more customers, convert more business.",
      },
    ],
    []
  );

  return (
    <section className="mt-16 max-md:bg-[#F3F7FA]">
      <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row  gap-8 md:gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-4">
            <div>
              <Image
                src={feature.image}
                alt="..."
                width="24"
                height="24"
                className="md:w-32"
              />
            </div>
            <div>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
