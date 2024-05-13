import ExtraNews from "@/src/components/ExtraNews";
import Featured from "@/src/components/Featured";
import Slider from "@/src/components/Slider";

export default function HomePage() {
  return (
    <main>
      <Slider />
      <Featured />
      <ExtraNews />
    </main>
  );
}
