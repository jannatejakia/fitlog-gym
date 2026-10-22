"use client"

import { PlanContext } from '@/context/PlanContext';
import { ILog } from '@/types/logtype';
import { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SavedToListBtn = ({ log }: {log: ILog}) => {
    const {savedList, setSavedList} = useContext(PlanContext);

    const handleSaved2List = () => {
        const alreadyExists = savedList.some((item) => item.id === log.id);

    if (alreadyExists) {
        toast.error(`${log.name} already in your save list!`);
        return;
    }
        setSavedList([...savedList, log]);
        toast.success(`${log.name} saved for later.`);
    }
    return (
        <div>
            <button onClick={()=> handleSaved2List()} className="btn h-9 min-h-9 border border-[#343b47] bg-transparent px-4 text-xs font-semibold text-white hover:border-[#596273] hover:bg-[#171b22]">
                <FaRegBookmark className="text-[10px]" />
                Save for later
            </button>
        </div>
    );
};

export default SavedToListBtn;