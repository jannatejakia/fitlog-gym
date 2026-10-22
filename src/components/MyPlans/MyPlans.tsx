'use client';

import PlanLogCard from '@/components/shared/LogsPlanCard';
import { PlanContext } from '@/context/PlanContext';
import { ILog } from '@/types/logtype';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const MyPlans = () => {
    const { myPlan, savedList, setMyPlan, setSavedList } = useContext(PlanContext);
    const [sortBy, setSortBy] = useState<'rating' | 'duration' | 'caloriesBurned' | ''>('');
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();

    const activeTab = searchParams.get('tab') === 'saved' ? 'saved' : 'plan';

    const sortPlans = (logs: ILog[]) => {
        const sortedPlan = [...logs];

        if (sortBy === 'rating') {
            sortedPlan.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'caloriesBurned') {
            sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === 'duration') {
            sortedPlan.sort((a, b) => b.duration - a.duration);
        }

        return sortedPlan;
    };

    const sortedAddPlan = sortPlans(myPlan);
    const sortedAddSaved = sortPlans(savedList);

    const activeLogs = activeTab === 'plan' 
    ? sortedAddPlan 
    : sortedAddSaved;

    const filteredLogs = activeLogs.filter((log) => {
        const searchInput = search.toLowerCase().trim();
        return (
            log.name.toLowerCase().includes(searchInput) ||
            log.muscleGroups.some((muscle) =>
            muscle.toLowerCase().includes(searchInput)
            )
        );
    })

    const totalMinutes = useMemo(() => {
        return activeLogs.reduce((total, log) => total + log.duration, 0);
    }, [activeLogs]);

    const totalCalories = useMemo(() => {
        return activeLogs.reduce(
            (total, log) => total + log.caloriesBurned, 0
        );
    }, [activeLogs]);

    const removeFromTab = (id: number) => {
        const workout = activeLogs.find((log) => log.id === id)

        if(!workout) return;

        if (activeTab === 'plan') {
            setMyPlan((item: ILog[]) => 
                item.filter((log) => log.id !== id)
            );
            toast.error(`${workout.name} removed from Today's Plan!`);
        } else {
            setSavedList((item: ILog[]) =>
                item.filter((log) => log.id !== id)
            );
            toast.error(`${workout.name} removed from Saved!`);
        }
    };

    return (
        
        <div className="mx-auto my-8 w-full max-w-[1232px] overflow-hidden px-4">
            <div className="mb-5 text-center md:text-left">
                <h2 className="text-xl font-bold text-white md:text-[30px]">
                    MY PLAN
                </h2>
                <p className="text-xs text-slate-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="my-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#232832] bg-[#13161d] sm:grid-cols-3 items-center justify-center">
                <div className="border-b border-[#232832] px-5 py-4 sm:border-b-0 sm:border-r text-center">
                    <p className="text-[12px] text-[#8e969f]">
                        Exercises
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-[#ccff00] text-center">
                        {activeLogs.length}
                    </p>
                </div>
                <div className="border-b border-[#232832] px-5 py-4 sm:border-b-0 sm:border-r text-center">
                    <p className="text-[12px] text-[#8e969f]">
                        Minutes
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-white">
                        {totalMinutes}
                    </p>
                </div>
                <div className="px-5 py-4 text-center ">
                    <p className="text-[12px] text-[#8e969f]">
                        Calories
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-white">
                        {totalCalories}
                    </p>
                </div>
            </div>

            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex shrink-0 rounded-lg border border-[#232832] bg-[#13161d] p-0.5">
                    <button
                        onClick={() => router.push('/my-plan?tab=plan')}
                        className={`rounded-md px-3 py-1.5 text-[11px] font-medium ${
                            activeTab === 'plan'
                                ? 'bg-[#e2f39c1a] text-[#ccff00]'
                                : 'text-[#69717d]'
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => router.push('/my-plan?tab=saved')}
                        className={`rounded-md px-3 py-1.5 text-[11px] font-medium ${
                            activeTab === 'saved'
                                ? 'bg-[#e2f39c1a] text-[#ccff00]'
                                : 'text-[#69717d]'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <div className={`${showSearch ? 'block' : 'hidden'} md:block`}>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search workout or tag..."
                            className="input input-sm h-8 w-[180px] border-[#232832] bg-[#13161d] text-[12px] text-white placeholder:text-[#69717d] md:w-[280px]"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowSearch(!showSearch)}
                        className="flex h-8 items-center gap-1.5 rounded-md border border-[#232832] bg-[#13161d] px-3 text-[12px] text-[#69717d] md:hidden">
                        <FaSearch />
                        <span>Search</span>
                    </button>
                </div>

            <div className="flex shrink-0 items-center gap-2">
                <span className="whitespace-nowrap text-[12px] text-[#69717d]">
                    Sort By
                </span>

                <select value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as
                                | 'rating'
                                | 'duration'
                                | 'caloriesBurned'
                                | ''
                        )
                    }
                    className="select select-sm h-8 min-h-8 w-31 border-[#232832] bg-[#13161d] px-2 py-1.5 text-[12px] text-white">
                    <option value="" disabled>
                        Duration
                    </option>
                    <option value="caloriesBurned">Calories</option>
                    <option value="duration">Duration</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        </div>

            <div className="space-y-2">
                {filteredLogs.length > 0 ? (
                    filteredLogs.map((log) => (
                        <PlanLogCard key={log.id}
                            log={log}
                            onMarkDone={removeFromTab}
                            onRemove={removeFromTab}
                        />
                    ))
                ) : (
                    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-dashed border-[#232832] text-center">
                        <h3 className="text-xs md:text-xl font-bold uppercase text-white">
                            Nothing here yet
                        </h3>
                        <p className="mt-1 text-xs text-[#69717d]">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link href='/' className="btn mt-3 h-7 min-h-7 rounded-full border-0 bg-[#ccff00] px-4 text-xs font-semibold text-black hover:bg-[#a9ed00]">
                            Go to workouts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlans;