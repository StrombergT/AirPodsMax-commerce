"use client";
import Animation from "@/src/components/ui/animation/Animation";
import AnimationText from "@/src/components/ui/animation/AnimationText";
import Hero from "@/src/components/home/Hero";
import VideoComponent from "@/src/components/home/VideoComponent";

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
