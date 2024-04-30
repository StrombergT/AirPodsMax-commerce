import Hero from "@/src/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-24">
        <div className="conatiner mx-auto">
          <h2 className="text-center">AirPodsMax Pro</h2>
          <p className="text-center mb-[30px]">
            AirPods Max - a perfect blend of crystal-clear high-resolution sound
            and the simplicity of AirPods. Your ultimate audio experience.
          </p>
          <div className="mx-auto justify-center items-center flex"></div>
        </div>
      </section>
    </>
  );
}
