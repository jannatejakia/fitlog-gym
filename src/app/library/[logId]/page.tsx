import type { Metadata } from 'next';
import LogDetailsCard from '@/components/LogDetails/LogDetailsCard';
import { getLog } from '@/lib/fit';
import { notFound } from 'next/navigation';

interface ILogsDetailsProp {
    params: {
        logId: number
    }
}

export async function generateMetadata({ params }: ILogsDetailsProp): Promise<Metadata> {
    const { logId } = await params;
    const log = await getLog(Number(logId));

    if (!log) {
        return {
            title: 'Workout Details | Fitlog',
            description: 'View exercise details and training instructions in Fitlog.',
        };
    }

    return {
        title: `${log.name} | Fitlog`,
        description: log.description,
    };
}

const LogsDetailsPage = async ({params}: ILogsDetailsProp) => {
    const { logId } = await params;
    const log = await getLog(logId);

    if(!log) notFound();

    return (
        <main>
            <LogDetailsCard log={log} />
        </main>
    );
};

export default LogsDetailsPage;