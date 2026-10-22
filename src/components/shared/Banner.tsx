import Image from 'next/image';
import banner from '@/assets/banner.png'
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="overflow-hidden py-16 bg-[#0c0d10]">
            <div className='relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#15171d] shadow-md rounded-3xl p-12 max-w-[1232px] mx-auto border border-[#222630]'>
                <div className="space-y-5 z-10 text-center md:text-left">
                    <h3 className='text-[11px] text-[#ccff00] font-bold text-center md:text-left'>WORKOUT LIBRARY</h3>
                    <h2 className='text-2xl md:text-[55px] font-bold text-white leading-tight'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h2>
                    <p className='text-xs md:text-base text-slate-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a 
                        href='#library' 
                        className='inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-4 bg-[#ccff00]/90 text-[#0c0d10] text-xs font-semibold rounded-xl shadow-md backdrop-blur-sm hover:bg-[#a1cd03] transition duration-300 mx-auto md:mx-0 uppercase'>
                        Browse Workouts 
                        <FaArrowRight className="text-xs" />
                    </a>
                </div>
                <div className='relative flex justify-center'>
                    <Image src={banner}
                        alt="A curated book selection on a polished shelf"
                        className="h-116 w-full max-w-[490px] object-contain"
                        priority />
                </div>
            </div>
        </section>
    );
};

export default Banner;