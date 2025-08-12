import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
    onClick?: () => void;
}

const variantClasses = {
    primary: "bg-red-500 text-white",
    secondary: "bg-red-300 text-red-900",
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex justify-center items-center "

export function Button({variant, text, startIcon, onClick}: ButtonProps){
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles}>
        <div className="pr-2">{startIcon}</div>
        {text}
    </button>
}