"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import Side_bar_item from './Side_bar_item';

interface Side_bar_props {
    children : React.ReactNode;
}

const  Side_bar : React.FC<Side_bar_props> = ({children})=>
{
    const pathname = usePathname();

    const routes = useMemo(()=> [
        {
            icon : HiHome,
            label : "Home",
            active : pathname !== '/search',
            href : '/'
        },
        {
            icon : HiHome,
            label : "Search",
            active : pathname !== '/search',
            href : '/search'
        },

    ], [])

    return (
        <div className="flex h-full">
            <div className="
                    md-flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                "
            >
                 <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-4
                        py-5
                    ">
                        {
                            routes.map((data)=>(
                                <Side_bar_item key={data.label} {...data}/>// spread it
                            ))
                        }
                    </div>  
                 </Box>
            </div>
        </div>
    );
}

export default Side_bar