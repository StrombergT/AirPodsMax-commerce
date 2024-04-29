import Hero from "@/src/components/Hero";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-24">
        <div className="conatiner mx-auto">
          <h2 className="text-center">AirPodsMax Pro</h2>
          <p className="text-center mb-[30px]">
            AirPods Max – en perfekt mix av kristallklart högupplöst ljud och
            enkelheten från AirPods. Din ultimata ljudupplevelse.
          </p>

          <div className="mx-auto justify-center items-center flex"></div>
          <div>
            <Button asChild>
              <Link href="/products">See all products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
