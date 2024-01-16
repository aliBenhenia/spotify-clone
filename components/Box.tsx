import React, { ReactNode } from 'react'
import {twMerge} from "tailwind-merge"
interface box_props {
    children : ReactNode;// required
    className?: string;// optional
}

const Box: React.FC<box_props> = ({children, className}) => {
   
  return (
    <div className={twMerge(`
         bg-neutral-900
         rounded-lg
         h-fit
         w-full
         `
        ,
        className
    )}>

        {children}
        
    </div>
  )
}

export default Box