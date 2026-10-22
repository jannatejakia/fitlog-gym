import type { Metadata } from "next";
import LogsCard from '@/components/shared/LogsCard';
import { getLogs } from '@/lib/fit';
import { ILog } from '@/types/logtype';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: "Workout Library | Fitlog",
    description: "Browse exercises by muscle group, equipment, and difficulty in the Fitlog workout library.",
};

const LibraryPage = async () => {
    const logsData = await getLogs();

    if (!logsData) notFound();
    return (
        <section className="max-w-[1232px] mx-auto w-full px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="font-serif text-2xl font-bold sm:text-3xl">THE LIBRARY</h1>
                <p className="mt-2 text-xs text-base-content/60">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    logsData.map((log: ILog) => (
                        <LogsCard key={log.id} log={log} />
                    ) 
                )}
            </div>
        </section>
    );
};

export default LibraryPage;