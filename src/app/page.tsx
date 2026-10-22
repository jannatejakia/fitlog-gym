import type { Metadata } from "next";
import LibraryItems from "@/components/homepage/LibraryItems";
import Banner from "@/components/shared/Banner";

export const metadata: Metadata = {
  title: "Fitlog | Workout Library & Fitness Tracking",
  description: "Explore workouts, build your training plan, and track your fitness journey with Fitlog.",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <LibraryItems />
    </div>
  );
}
