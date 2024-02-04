"use client"

import { useRouter } from "next/navigation";
import Image from "next/image"
import { FaPlay } from "react-icons/fa";

interface ListItem_props{
    name:string;
    image:string;
    href:string;
}


export default function ListItem({name,image, href}:ListItem_props) {
 const router = useRouter();
 const onclick = ()=>{
    // add auth before change route
    // router.push(href);
    
 }
  return (
    <div>
        <button
        onClick={onclick}
        className="
            relative
            group
            flex
            items-center
            rounded-md
            overflow-hidden
            gap-x-4
            bg-neutral-100/10
            hover:bg-neutral-100/20
            transition
            pr-4
            w-full
        ">
                <div className="
                    relative
                    min-h-[64px]
                    min-w-[64px]
                ">
                    <Image
                     className="object-cover"
                     src={image}
                     width={64}
                     height={64}
                     alt="image liked"
                    />
                </div>
                    <p className="text-medium truncate py-5">
                        {name}
                    </p>
                    <div className="  absolute
                        transition
                        opacity-0
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-blue-600
                        p-3
                        group-hover:opacity-100
                        hover:scale-110
                        drop-shadow-md
                        right-4
                        group">
                        <FaPlay className="text-black " />
                    </div>
        </button>
    </div>
  )
}
