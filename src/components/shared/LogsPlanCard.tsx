import Image from 'next/image';
import Link from 'next/link';
import { ILog } from '@/types/logtype';
import { FaCheck, FaFire, FaRegClock, FaRegStar, FaTrash } from 'react-icons/fa';

interface PlanLogCardProps {
    log: ILog;
    onMarkDone: (id: number) => void;
    onRemove: (id: number) => void;
}

const PlanLogCard = ({ log, onMarkDone, onRemove }: PlanLogCardProps) => {

    return (
        <article className="flex w-full flex-col gap-3 rounded-xl border border-[#292d35] bg-[#15171c] p-2.5 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="relative h-[58px] w-[92px] shrink-0 overflow-hidden rounded-lg">
                    <Image
                        src={log.image}
                        alt={log.name}
                        fill
                        className="object-cover"
                        sizes="92px"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[12px] font-extrabold uppercase">
                        {log.name}
                    </h3>
                    <p className="mt-0.5 truncate text-[12px] text-[#8e969f]">
                        {log.equipment}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[12px] text-[#a8b0bd]">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaRegClock className="text-[12px]" />
                            {log.duration} min
                        </span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaFire className="text-[12px]" />
                            {log.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            <FaRegStar className="text-[12px]" />
                            {log.rating}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex shrink-0 items-center justify-end gap-2 sm:w-auto">
                <Link
                    href={`/library/${log.id}`}
                    className="btn h-7 min-h-7 rounded-full border border-[#343b47] bg-transparent px-3 text-[12px] font-medium text-white hover:border-[#596273] hover:bg-[#171b22]">
                    View Details
                </Link>

            <button onClick={() => onMarkDone(log.id)} className="btn h-7 min-h-7 rounded-full border-0 bg-[#ccff00] px-3 text-[12px] font-semibold text-black hover:bg-[#a9ed00]"> 
                <FaCheck className="text-[10px]" /> Mark as Done </button>                
                <button
                    onClick={() => onRemove(log.id)}
                    className="btn btn-square h-7 min-h-7 w-7 rounded-full border border-[#343b47] bg-transparent text-[#a8b0bd] hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
                    aria-label={`Delete ${log.name}`}>
                    <FaTrash className="text-[10px]" />
                </button>
            </div>
        </article>
    );
};

export default PlanLogCard;