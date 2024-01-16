import Link from "next/link";
import { IconType } from "react-icons";
import { Side_bar } from '@components/Side_bar';
import { twMerge } from "tailwind-merge";

interface side_bar_item_props{
    icon : IconType;
    label : string;
    active?: boolean;
    href: string;
}

 const Side_bar_item: React.FC<side_bar_item_props> = ({icon, label,active, href})=>{

    return (
            <Link href={href}
                className={twMerge(`
                flex
                flex-row
                h-auto
                item-center
                w-full
                gap-x-4
                text-md
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                `
                ,
                active && `text-white`
                )}
            >
                {label}
            </Link>
    );
}

export default Side_bar_item