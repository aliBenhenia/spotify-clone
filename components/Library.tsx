"use client"

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai"

const Library = ()=>{
    
    const onClick = ()=>{
        // handle upload later..
         
    };
    return (
        <div class="flex flex-col">
            <div className="
            flex
            items-center
            justify-between
            px-5
            ">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={25} className="text-neutral-400"/>
                    <p className="text-neutral-400 font-medium text-md">
                        YOUR LIBARAY
                    </p>
                </div>
                <AiOutlinePlus size={25}
                    onClick={onClick}
                    className = "
                                text-neutral-400
                                cursor-pointer
                                hover:text-white
                                transition
                    "
                />
            </div>
                <div className="
                flex
                flex-col
                gap-y-2
                px-3
             ">
                list of songs!
            </div>
        </div>

    );
}

export default Library