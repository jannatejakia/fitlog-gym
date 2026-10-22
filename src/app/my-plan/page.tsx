import type { Metadata } from "next";
import MyPlans from "@/components/MyPlans/MyPlans";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "My Plan | Fitlog",
    description: "Review and manage your saved workouts and personal training plan.",
};
    
    const MyPlanPage = () => {
        return (
            <Suspense fallback={null}>
                <MyPlans />
            </Suspense>
            );
        };

        export default MyPlanPage;