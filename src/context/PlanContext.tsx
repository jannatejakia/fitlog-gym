"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { ILog } from '@/types/logtype';

interface IPlanContextType {
    myPlan: ILog[];
    setMyPlan: Dispatch<SetStateAction<ILog[]>>;
    savedList: ILog[];
    setSavedList: Dispatch<SetStateAction<ILog[]>>;
}

export const PlanContext = createContext<IPlanContextType>({
    myPlan: [],
    setMyPlan: () => { },
    savedList: [],
    setSavedList: () => { },
});

const getStoredData = (item: string): ILog[] => {

    if(typeof window === 'undefined'){
        return [];
    }

    try {
        const storedPlan = localStorage.getItem(item);
        
        if(!storedPlan) {
            return [];
        }
        const parsedPlan = JSON.parse(storedPlan);

        return Array.isArray(parsedPlan) ? parsedPlan : [];

    }catch{
        localStorage.removeItem(item);
        return [];
    }
}

const PlanProvider = ({ children }: { children: ReactNode }) => {
    const [myPlan, setMyPlan] = useState<ILog[]>(()=>getStoredData('myPlan'));
    const [savedList, setSavedList] = useState<ILog[]>(()=>getStoredData('savedList'));

    useEffect(()=> {
        localStorage.setItem('myPlan', JSON.stringify(myPlan));
    }, [myPlan]);

    useEffect(() => {
        localStorage.setItem('savedList', JSON.stringify(savedList));
    }, [savedList])

    const sharedData: IPlanContextType = {
        myPlan,
        setMyPlan,
        savedList,
        setSavedList,
    };

    return (
        <PlanContext.Provider value={sharedData}>
        {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;