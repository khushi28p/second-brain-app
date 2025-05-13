import { type ReactElement } from "react";

type ButtonVariants = "primary" | "secondary";

export interface ButtonProps{
    variant: ButtonVariants,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-blue-700 text-white",
    "secondary": "bg-blue-400 text-white",
}

const sizeStyles = {
    "sm": "px-2 py-1 text-sm",  
    "md": "px-4 py-2 text-md",
    "lg": "px-6 py-3 text-lg",
}

const defaultStyles = "rounded-md p-4 flex items-center justify-center "

export const Button = (props: ButtonProps) => {
return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}</button>
}