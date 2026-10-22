"use client";

import { PlanContext } from "@/context/PlanContext";
import { ILog } from "@/types/logtype";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToPlanBtn = ({ log }: { log: ILog }) => {
    const { myPlan, setMyPlan } = useContext(PlanContext);

    const alreadyExists = myPlan.some((item) => item.id === log.id);
    const isMaxPlan = myPlan.length >= 5;
    const disabled = isMaxPlan;

    const handleAdd2Plan = () => {
        if (alreadyExists) {
            toast.error(`${log.name} already in your plan!`);
            return;
        }
        if (isMaxPlan) {
            toast.error("Today's Plan already has 5 workouts!");
            return;
        }
        setMyPlan([...myPlan, log]);
        toast.success(`${log.name} added to Plan.`);
    };

    return (
        <div>
            <button
                onClick={handleAdd2Plan}
                disabled={disabled}
                className={`btn h-9 min-h-9 border-0 px-4 text-xs font-semibold text-black ${
                disabled
                    ? "cursor-not-allowed bg-[#252a32] text-[#69717d]"
                    : "bg-[#b8ff00] hover:bg-[#a9ed00]"
                }`}>
                <FaCheck className="text-[10px]" />
                {alreadyExists
                    ? "Already Added"
                    : isMaxPlan ? "Plan Full" : "Add to today's plan"}
            </button>
        </div>
    );
};

export default AddToPlanBtn;