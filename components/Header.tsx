"use client";
import {useRouter} from "next/navigation"
import {twMerge} from "tailwind-merge"
import {RxCaretLeft, RxCaretRight} from "react-icons/rx"


interface header_props {
    children : React.ReactNode;
    className?: string;
}

const Header : React.FC<header_props> = ({children, className })=>{
    const router = useRouter();
        const handle_logout = ()=>{
            // next
        }
    return (
        <div 
        className = {twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        
        `, className)}
        >
            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
            ">
                <div className="  flex gap-x-4 items-center">
                    <button
                    onClick = {()=> router.back()}

                    className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-100
                    transition
                    "
                    >
                        <RxCaretLeft 
                        className="text-white"
                        size={37} />
                    </button>
                    <button
                    onClick = {()=> router.forward()}
                    className="
                    rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    hover:opacity-100
                    transition
                    "
                    >
                        <RxCaretRight 
                        className="text-white"
                        size={37} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">

                </div>
            </div>
            {children}
        </div>
    );
}

export default Header