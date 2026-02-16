import EventCategory from "@/components/EventCategory";
import Navbar from "@/components/Navbar";
import Slider from "@/components/slider";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import ListedEvent from "@/components/ListedEvent";

export default function RootePage() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <Slider />
        </div>

        <div className="col-span-6">
          <EventCategory />
        </div>
      </div>
    <div>
      <ListedEvent />
    </div>

    <div className="fixed bottom-6 right-6 z-50">
      <ThemeToggle />
    </div>

    </div>
  );
}
