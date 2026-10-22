import Image from "next/image";
import { ILog } from "@/types/logtype";
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";
import Link from "next/link";

interface LogsCardProps {
    log: ILog;
}

const LogsCard = ({ log }: LogsCardProps) => {
    return (
    <Link href={`/library/${log.id}`} className="block">
        <article className="overflow-hidden rounded-xl border border-[#292d35] bg-[#15171c] text-white">
            <div className="h-[215px] w-full overflow-hidden">
                <Image
                src={log.image}
                alt={log.name}
                width={740}
                height={416}
                className="block h-auto w-full object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <div className="px-5 py-5">
                <div className="mb-4 flex flex-wrap gap-2">
                    {log.muscleGroups.map((muscle) => (
                        <span
                        key={muscle}
                        className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
                        {muscle}
                        </span>
                    ))}
                </div>
                    <h2 className="text-base font-extrabold uppercase tracking-wide">
                    {log.name}
                    </h2>
                    <p className="mt-1 text-xs text-base-content/60">
                    {log.equipment}
                    </p>
                <div className="mt-6 flex items-center gap-4 rounded-sm border border-base-content/10 p-2 text-[11px] text-base-content/70">
                    <div className="flex items-center gap-1.5">
                        <span className="flex h-4 w-4 items-center justify-center">
                            <FaRegClock className="block text-[14px]" />
                        </span>
                        <span className="leading-none">{log.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="flex h-4 w-4 items-center justify-center">
                            <FaFire className="block text-[14px]" />
                        </span>
                        <span className="leading-none">{log.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="flex h-4 w-4 items-center justify-center">
                            <FaRegStar className="block text-[14px]" />
                        </span>
                        <span className="leading-none">{log.rating}</span>
                    </div>
                </div>
            </div>
        </article>
    </Link>
    );
};

export default LogsCard;