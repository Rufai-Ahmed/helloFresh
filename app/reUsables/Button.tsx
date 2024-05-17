import React, { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: FC<iButton> = ({ text, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "px-6 border-[2px] hover:bg-green-200 transition-all duration-300 font-semibold py-[6px] border-green-700 rounded-md text-green-700",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
