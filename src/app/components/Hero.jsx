import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="section-container mt-32">
        <div className="flex md:flex-row flex-col gap-2 md:gap-8">
          <div className="md:hidden">
            <h2 className="hero-heading text-center">
              Avaya Call Reporting Reinvented
            </h2>
          </div>

          <div className="max-md:hidden">
            <h2 className="hero-heading">Avaya Call Reporting Reinvented</h2>
            <p className="max-w-xl mt-8 mb-4">
              Step into the future of call center analytics with Comstice Avaya
              Call Reporting solution. Say goodbye to the need for an Avaya AES
              server and extra licenses for every agent, and say hello to a
              world of insightful analytics, cradle-to-grave reports, and
              automated agent and team reports by email.
            </p>
          </div>
          
          <div>
            <Image
              src="/images/Hero-Image.png"
              alt="..."
              width="650"
              height="482"
              className="max-md:scale-75"
            />
          </div>

          <div className="md:hidden">
            <p className="mb-4">
              Step into the future of call center analytics with Comstice Avaya
              Call Reporting solution. Say goodbye to the need for an Avaya AES
              server and extra licenses for every agent, and say hello to a
              world of insightful analytics, cradle-to-grave reports, and
              automated agent and team reports by email.
            </p>
          </div>
        </div>

        <div className="text-right md:text-left">
          <button className="ring-2 hover:ring-gray-200 hover:bg-transparent hover:text-black rounded p-4 duration-200 bg-primary text-white">
            Request Demo &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
