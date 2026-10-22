import { ILog } from '@/types/logtype';
import Image from 'next/image';
import AddToPlanBtn from './Add2PlanBtn';
import SavedToListBtn from './Saved2ListBtn';

interface LogDetailsCardProps {
    log: ILog;
}

const LogDetailsCard = ({ log }: LogDetailsCardProps) => {
    return (
        <article className="mx-auto my-10 grid h-auto w-full max-w-[1232px] grid-cols-1 items-start justify-center gap-8 text-white lg:h-[797px] lg:grid-cols-[520px_520px] lg:gap-[56px]">            
            <div className="relative mx-auto h-[600px] w-full max-w-[520px] overflow-hidden rounded-xl border border-[#29313d] bg-[#151922]">                
                <Image
                    src={log.image}
                    alt={log.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="520px"
                />
            </div>

                <div className="space-y-6 mx-auto flex h-auto w-full max-w-[520px] min-w-0 flex-col">                <div>
                    <div className='text-center md:text-left'>
                        <h1 className="font-heading text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
                            {log.name}
                        </h1>
                        <p className="mt-2 max-w-2xl text-base leading-5 text-[#a8b0bd]">
                            {log.description}
                        </p>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2 mb-2 md:mb-0 md:justify-start">
                        {log.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-bold text-black">
                                {muscle}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#29313d] bg-[#151922]">
                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Equipment
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.equipment}
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Difficulty
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.difficulty}
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Sets
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.sets}
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Reps
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.reps}
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Duration
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.duration} min
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#29313d] px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Calories
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e9aaa]">
                            Rating
                        </span>
                        <span className="text-[11px] font-semibold text-white">
                            {log.rating}
                        </span>
                    </div>
                </div>

                <div className="mt-2 text-center md:mt-0 md:text-left">
                    <h2 className="text-base font-bold uppercase tracking-wide text-white">
                        Instructions
                    </h2>
                    <ol className="mt-2 space-y-2">
                        {log.instructions.map((instruction, ind) => (
                            <li
                                key={ind}
                                className="flex justify-center gap-2 text-center text-sm leading-4 text-[#b6beca] md:justify-start md:text-left">
                                <span className="shrink-0 text-[#b8ff00]">
                                    {ind + 1}.
                                </span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 md:mt-0 md:justify-start">
                    <AddToPlanBtn log={log} />
                    <SavedToListBtn log={log} />
                </div>
            </div>
        </article>
    );
};

export default LogDetailsCard;