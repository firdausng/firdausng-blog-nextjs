'use client'
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import DarkThemeToggle from "@/components/dark-theme-toggle";
export default function Header(){
    const pathname = usePathname()

    return (
        <header className={'flex flex-col mb-3'}>
            <div className={'w-full py-2 flex items-center justify-between'}>
                <div className={"rounded-lg shadow-md shadow-slate-600/50 dark:shadow-slate-50/50"}>
                    <Image
                        className="object-cover h-16 w-full"
                        src={'/firdausng_logo.png'}
                        alt={"Firdausng logo"}
                        width={500}
                        height={500}
                    />
                </div>
                <div className={'flex'}>
                    <div className={'flex gap-4 m-1'}>

                    </div>
                    <div>
                        <DarkThemeToggle />
                    </div>
                </div>
            </div>
            <div className={'flex justify-center gap-3'}>
                {navLinks.map(link =>{
                    const isActive = pathname === link.path
                    return (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={` ${isActive ? 'underline decoration-solid ' : ''} text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white`}
                        >{link.name}</Link>
                    )
                })}
            </div>
            <div className={'flex justify-center'}>
                <ul className={'my-2 pt-2 fill-zinc-100'}>
                    {/*<li className="inline-block py-1 px-3 hover:rotate-6 hover:scale-110 transition-transform duration-300 ">*/}
                    {/*    <a rel="me noopener" target="_blank" href="https://twitter.com/andrewlocknet" title="Follow @firdausng on Twitter" className="track fill-zinc-100 hover:fill-primary">*/}
                    {/*        <svg width="24px" height="24px" viewBox="0 -100 900 900" version="1.1" aria-label="Twitter" role="img" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*            <path className="fill-slate-500 dark:fill-slate-200" d="m 904,77.882353 q -37,54 -90,93 0,8 0,23 0,73 -21,145 -21,72 -64,139 -43,67 -103,117 -60,50 -144,82 -84,32 -181,30 -151,0 -276,-81 19,2 43,2 126,0 224,-77 -59,-1 -105,-36 -46,-35 -64,-89 19,3 34,3 24,0 48,-6 -63,-13 -104,-62 -41,-49 -41,-115 v -2 q 38,21 82,23 -37,-25 -59,-64 -22,-39 -22,-86 0,-49 25,-91 68,83 164,133 96,50 208,55 -5,-21 -5,-41 0,-75 53,-127 53,-52 127,-53 79,0 132,57 61,-12 115,-44 -21,64 -80,100 52,-6 104,-28 z"></path>*/}
                    {/*        </svg>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li className="inline-block py-1 px-3 hover:rotate-6 hover:scale-110 transition-transform duration-300">
                        <a rel="me noopener" target="_blank" href="https://www.linkedin.com/in/firdaus-kamaruddin" title="Firdaus Kamaruddinon LinkedIn" className="track fill-zinc-100 hover:fill-primary">
                            <svg width="24px" height="24px" viewBox="0 -100 900 900" version="1.1" aria-label="LinkedIn" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-slate-500 dark:fill-slate-200" d="M 132,639 H 261 V 252 H 132 Z M 270,132 q -1,-29 -21,-48 -20,-19 -51,-19 -31,0 -53,19 -22,19 -21,48 0,29 20,48 20,19 52,19 v 0 q 33,0 53,-19 20,-19 21,-48 z M 596,639 H 725 V 417 q 0,-86 -41,-130 -41,-44 -107,-44 -76,0 -117,65 h 1 V 252 H 332 q 2,37 0,387 H 461 V 422 q 0,-21 4,-31 8,-19 25,-33 17,-14 41,-14 65,0 65,88 z M 857,82 v 536 q 0,66 -47,113 -47,47 -114,48 H 161 Q 94,779 47,731 0,683 0,618 V 82 Q 0,16 47,-31 94,-78 161,-79 h 535 q 67,0 114,48 47,48 47,113 z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="inline-block py-1 px-3 hover:rotate-6 hover:scale-110 transition-transform duration-300">
                        <a rel="me noopener" target="_blank" href="https://github.com/firdausng" title="Firdaus Kamaruddin on Github" className="track fill-zinc-100 hover:fill-primary">
                            <svg width="24px" height="24px" viewBox="-10 -100 900 900" version="1.1" aria-label="Github" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-slate-500 dark:fill-slate-200" d="m 429,-57.9 q 116,0 215,58 99,58 156,156 57,98 57,215 0,140 -82,252 -82,112 -211,155 -15,3 -22,-4 -7,-7 -7,-17 0,-1 0,-43 0,-42 0,-75 0,-54 -29,-79 32,-3 57,-10 25,-7 53,-22 28,-15 45,-37 17,-22 30,-58 13,-36 11,-84 0,-67 -44,-115 21,-51 -4,-114 -16,-5 -46,6 -30,11 -51,25 l -21,13 q -52,-15 -107,-15 -55,0 -108,15 -8,-6 -23,-15 -15,-9 -47,-22 -32,-13 -47,-7 -25,63 -5,114 -44,48 -44,115 0,47 12,83 12,36 29,59 17,23 45,37 28,14 52,22 24,8 57,10 -21,20 -27,58 -12,5 -25,8 -13,3 -32,3 -19,0 -36,-12 -17,-12 -31,-35 -11,-18 -27,-29 -16,-11 -28,-14 l -11,-1 q -12,0 -16,2 -4,2 -3,7 1,5 5,8 4,3 7,6 l 4,3 q 12,6 24,21 12,15 18,29 l 6,13 q 7,21 24,34 17,13 37,17 20,4 39,3 19,-1 31,-1 l 13,-3 q 0,22 0,50 0,28 1,30 0,10 -8,17 -8,7 -22,4 -129,-43 -211,-155 -82,-112 -82,-252 0,-117 58,-215 58,-98 155,-156 97,-58 216,-58 z m -267,616 q 2,-4 -3,-7 -6,-1 -8,1 -1,4 4,7 5,3 7,-1 z m 18,19 q 4,-3 -1,-9 -6,-5 -9,-2 -4,3 1,9 5,6 9,2 z m 16,25 q 6,-4 0,-11 -4,-7 -9,-3 -5,3 0,10 5,7 9,4 z m 24,23 q 4,-4 -2,-10 -7,-7 -11,-2 -5,5 2,11 6,6 11,1 z m 32,14 q 1,-6 -8,-9 -8,-2 -10,4 -2,6 7,9 8,3 11,-4 z m 35,3 q 0,-7 -10,-6 -9,0 -9,6 0,7 10,6 9,0 9,-6 z m 32,-5 q -1,-7 -10,-5 -9,1 -8,8 1,7 10,4 9,-3 8,-7 z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>

            </div>
        </header>
    )
}

const navLinks = [
    {path: "/", name: "Home"},
    {path: "/blog", name: "Blog"},
    {path: "/about", name: "About"},
]

const socialLinks = [
    {path: 'github', name:''},
    {path: 'linkedin', name:''},
]