import { ILog } from "@/types/logtype";

export const getLogs = async (): Promise<ILog[] | null> => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export const getLog = async (id: number): Promise<ILog | null> => {
    try {
        const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}