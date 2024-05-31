"use client";
import Animation from "@/src/components/Animation";
import AnimationText from "@/src/components/AnimationText";
import Hero from "@/src/components/Hero";
import VideoComponent from "@/src/components/VideoComponent";

export default function HomePage() {
  return (
    <main className="h-full w-full  ">
      <div className="flex flex-col">
        <Hero />
        <Animation />
        <AnimationText />
        <VideoComponent />
      </div>
    </main>
  );
}
