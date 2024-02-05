import { cn } from "@/lib/utils/cn";
import React, { JSX, FC } from "react";
import { ButtonBase, ButtonProps } from "@mui/material";

/**
 * Eclipse Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<ButtonProps> = (props): JSX.Element => (
  <ButtonBase
    {...props}
    className={cn(
      "border-2 border-primary bg-primary px-2 py-3 text-sm tracking-wider text-slate-900 outline-2 outline-primary duration-300 ease-in-out hover:border-primary hover:bg-background hover:text-primary hover:outline-primary disabled:opacity-50",
      props.className,
    )}
  >
    {props.children}
  </ButtonBase>
);

/**
 * Export the Button component
 */
export default Button;
