'use client'

import Image from "next/image";
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import logo from '@/assets/logo.png'
import { useContext, useState } from "react";
import { PlanContext } from "@/context/PlanContext";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";

const Navbar = () => {
    const { myPlan, savedList } = useContext(PlanContext);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session, isPending, error } = authClient.useSession()
    // console.log('user session data', session)
    const router = useRouter();

    if(isPending) {
        return <div className="flex flex-col items-center gap-2 py-4">
            <Spinner className="text-success" size="xl" />
        </div>
    }

    if(error) {
        return <Link href="/sign-in" 
        className="rounded-3xl border border-slate-50 bg-neutral-800 px-3 py-2 text-slate-400 hover:bg-[#ccff00] hover:text-neutral-100">Sign in</Link>
    }

    const links = 
    <>
        {/* <li><Link className={`links ${pathname === '/'  ? 'text-blue-500' : 'mimshad.cse41'} font-semibold`} href='/'>Home</Link></li> */}
        <li><Link className={`links ${pathname === '/' ? 'text-[#ccff00]' : 'text-white'} font-semibold`}  href='/'>Workout</Link></li>
        <li><Link className={`links ${pathname === '/my-plan' ? 'text-[#ccff00]' : 'text-white'} font-semibold`}  href='/my-plan'>My Plan</Link></li>
        {
            session?.user && (
                <li><Link className={`links ${pathname === '/profile' ? 'text-[#ccff00]' : 'text-white'} font-semibold`}  href='/profile'>Profile</Link></li>
            )
        }
    </>

    const handleSignOut = async () => {
        await authClient.signOut(); 
        setIsMenuOpen(false);
        router.push('/sign-in')
    }
        const tabLinks =
        <>
            <Link href="/my-plan?tab=plan"
                className={`myPlan flex items-center gap-1.5 ${ pathname === '/my-plan' &&
                    (searchParams.get('tab') === 'plan' || searchParams.get('tab') === null)
                        ? 'text-[#ccff00]'
                        : ''
                } text-sm font-semibold`}>Plan 
                <span className={`myPlan rounded-full ${ pathname === '/my-plan' &&
                    (searchParams.get('tab') === 'plan' || searchParams.get('tab') === null) ? 'bg-[#ccff00] text-black' : '' } px-2 py-0.5 text-sm font-bold border border-[#ffffff]`}>
                    {myPlan.length}
                </span>
            </Link>

            <Link href="/my-plan?tab=saved"
                className={`savedList flex items-center gap-1.5 ${ pathname === '/my-plan' && searchParams.get('tab') === 'saved'
                        ? 'text-[#ccff00]'
                        : ''
                } text-sm font-semibold`}>Saved 
                <span className={`savedList rounded-full ${ pathname === '/my-plan' &&
                    (searchParams.get('tab') === 'saved' || searchParams.get('tab') === null) ? 'bg-[#ccff00] text-black' : '' } px-2 py-0.5 text-sm font-bold border border-[#ffffff]`}>
                    {savedList.length}
                </span>
            </Link>
        </>

        const authLinks = 
        <>
            {
                session?.user          
                ? 
                <> 
                    <p className='text-xs'>Welcome,<span className="text-[#ccff00] text-base"> {session?.user.name}</span></p>
                    <button className="btn h-8 min-h-8 rounded-full border-0 bg-[#ccff00] px-3 text-sm font-semibold text-black hover:bg-[#a9ed00]" onClick={handleSignOut}>Sign Out</button>
                </> 
                : 
                <>
                    <Link className='text-sm text-black font-semibold hover:text-neutral-700 bg-[#ccff00] hover:bg-[#b4e002] border border-slate-800 rounded-3xl px-2.5 py-2 cursor-pointer' href="/sign-in">Sign In</Link>
                    <Link className='text-sm text-black font-semibold hover:text-neutral-700 bg-[#ccff00] hover:bg-[#b4e002] border border-slate-800 rounded-3xl px-2.5 py-2 cursor-pointer' href="/sign-up">Sign Up</Link>
                </>
            }
        </>

    return (
        <nav className="border-b border-[#29313d]">
            <header className="mx-auto flex h-16 max-w-[1240px] items-stretch justify-between px-5">
                <div className="flex items-center gap-4">
                    <button className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}>
                        <span className="sr-only">Menu</span>
                        <svg className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="nav logo" height={20} width={20} />
                        <Link href="/"><p className="font-bold">FITLOG</p></Link>
                    </div>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                    {links}
                    </ul>
                    <div className="hidden items-center justify-center gap-4 md:flex">
                        {tabLinks}
                        {authLinks}
                    </div>
            </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {links}
                            <li className="mt-4 flex md:flex-col justify-center md:justify-end gap-2 border-t border-separator pt-4">
                                {tabLinks}
                            </li>
                            <li className="mt-4 flex md:flex-col justify-center items-center md:justify-end gap-2 border-t border-separator pt-4">
                                {authLinks}
                            </li>
                        </ul>
                    </div>
                )}
        </nav>
    );
};

export default Navbar;
