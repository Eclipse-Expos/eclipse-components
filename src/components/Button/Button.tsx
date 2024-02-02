import { cn } from "@/lib/utils/cn";
import React, { JSX, FC, PropsWithChildren } from "react";
import { CustomButtonProps, ButtonProps } from "./Button.types";

/**
 * Eclipse Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<CustomButtonProps & PropsWithChildren<ButtonProps>> = (
  props,
): JSX.Element => (
  <button
    {...props}
    className={cn(
      "border-2 border-primary bg-primary px-2 py-3 text-sm tracking-wider text-slate-900 outline-2 outline-primary duration-300 ease-in-out hover:border-primary hover:bg-background hover:text-primary hover:outline-primary disabled:opacity-50",
      props.className,
    )}
  >
    {props.children}
  </button>
);

/**
 * Export the Button component
 */
export default Button;
