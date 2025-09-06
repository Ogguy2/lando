import React from 'react';
import {clsx} from "clsx";
import {inter} from "@/components/Fonts";


interface ButtonProps {
    type: "primary" | "secondary",
    className?: string,
    title: string
}

const Button = ({type, title, className = ""}: ButtonProps) => {
    const typeClass = {
        primary: "text-white bg-[#3164f4] border border-[#3164f4]",
        secondary: "text-black border border-black "
    }
    return (
        <button
            className={clsx(typeClass[type], inter.className, "py-3 font-[600] px-5 text-base rounded-xl", className)}>
            {title}
        </button>
    );
};

export default Button;