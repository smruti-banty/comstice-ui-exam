import Image from "next/image";
import { useMemo } from "react";

export default function Analysis() {
  const datas = useMemo(
    () => [
      {
        id: 1,
        title: "No Avava AES Server Needed",
        description:
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed.",
      },
      {
        id: 2,
        title: "Scheduled Reports By E-Mail",
        description:
          "Daily insights by email for team agents and the queues based on goals and thresholds",
      },
      {
        id: 3,
        title: "Avava ECH Cradle to Grave Reports",
        description:
          "Create cradle to grave reports and visual customer journey for each call using Avava CMS External Call Historv data.",
      },
    ],
    []
  );
  return (
    <section>
      <div className="section-container mt-16 flex flex-col md:flex-row gap-8">
        <div className="max-md:order-2 max-md:flex items-center justify-center">
          <Image
            src="/images/analysis/Measure-analyze.png"
            alt="..."
            width="676"
            height="757"
            className="md:h-full"
          />
        </div>

        <div>
          <div>
            <h2 className="hero-heading capitalize">Measure, Analyze improve</h2>
            <p className="mt-4 md:max-w-lg">
              Visualise your historical performance to understand customer
              behavior, customer patience and the demand for customer service
              using out of the box analvtics features and performance
              indicators.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-8 md:gap-4">
            {datas.map((data) => (
              <div key={data.id} className="flex gap-4">
                <div>
                  <Image
                    src="/images/analysis/check-circle.svg"
                    alt="..."
                    width="34"
                    height="34"
                  />
                </div>
                <div>
                  <h5>{data.title}</h5>
                  <p className="md:max-w-md">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
