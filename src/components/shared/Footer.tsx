import Image from "next/image";
import ficon from '@/assets/footer.png'

const Footer = () => {
    return (
        <footer className="border-t border-[#29313d] bg-[#0b0d11]">
            <div className="mx-auto flex min-h-[100px] w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-3 py-3 sm:flex-row sm:px-4">
                <div className="flex items-center gap-2">
                    <Image src={ficon} alt="footer icon" />
                    <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                <p className="text-center text-xs text-[#69717d] sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;