import React from "react";
import clsx from "clsx";
import {interFont} from "@/constants/fonts";

interface ButtonProps {
    title: string;
    className?: string;
    variant: "black" | "white",
    iconBefore?: boolean;
    onClick?: () => void;
}
// box-shadow: rgb(3, 3, 3) 0px 1px 0px;
const Button = ({title, className, variant = "black", onClick}: ButtonProps) => {
    const variantClass = {
        black: "bg-black text-white  ",
        white: "bg-white text-black  ",
    }
    return <button
        onClick={onClick}
        className={clsx(
            interFont.className,
            variantClass[variant],
            " font-[700] py-4 px-16 text-sm cursor-pointer shadow-[0_1px_0px_rgba(3,3,3)]",
            className,
            )}
    >
        {title}
    </button>
}

export default Button;
