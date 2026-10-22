import { getLogs } from '@/lib/fit';
import { ILog } from '@/types/logtype';
import { notFound } from 'next/navigation';
import LogsCard from '../shared/LogsCard';
import Link from 'next/link'

const LibraryItems = async () => {
    const logsData = await getLogs();
    // console.log('log data', logsData)
    if (!logsData) notFound();
    return (
        <section id="library" className="max-w-[1232px] mx-auto w-full px-4 py-8">
            <div className="mb-8 text-center md:text-left">
                <h1 className="font-serif text-2xl font-bold sm:text-3xl">THE LIBRARY</h1>
                <p className="mt-2 text-xs text-base-content/60">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    logsData.slice(0, 6).map((log: ILog) => (
                        <LogsCard key={log.id} log={log} />
                    ) 
                )}
            </div>
            <div className='text-center mt-8'>
                <Link href="/library"
                className="btn bg-[#9ae600] text-sm text-black font-semibold rounded-xl">Show All 
                </Link>
            </div>
        </section>
    );
};

export default LibraryItems;