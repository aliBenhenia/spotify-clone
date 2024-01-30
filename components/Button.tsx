import { Twinkle_Star } from "next/font/google";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"
import { twMerge } from "tailwind-merge"
interface Button_props extends ButtonHTMLAttributes<HtmlHTMLAttributes>
{
    children : ReactNode;

}
const Button = forwardRef<HTMLButtonElement, Button_props>(( {
    className,
    children,
    disabled,
    type='button',
    ...props

 }, ref)=>{
  
    return  (
        <button
        type={ type}
        className={twMerge(`
        w-full
        rounded-full
        py-2
        px-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        border
        border-transparent
        text-black
        font-bold
        hover:opacity-75
        transition
        `, className)}
        disabled={disabled}
        ref={ref}
        {...props}
        >
            {children}

        </button>
    );
 }  
    );
Button.displayName = 'button'

export default Button;
