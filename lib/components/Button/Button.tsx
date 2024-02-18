import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLButtonProps } from "./Button.types";
// import { ButtonBase, ButtonProps } from "@mui/material";

/**
 * Eclipse Button Component
 *
 * @param props - HTMLButtonProps
 * @returns JSX.Element
 *
 * @example
 * <Button>Click Me!</Button>
 */
const Button: FC<HTMLButtonProps> = (props): JSX.Element => (
  <button
    {...props}
    className={cn(
      "border-2 border-primary bg-primary px-2 py-3 text-sm tracking-wider text-slate-900 outline-2 outline-primary duration-300 ease-in-out hover:border-primary hover:bg-background hover:text-primary hover:outline-primary disabled:opacity-50",
      props.className
    )}
  >
    {props.children}
  </button>
);

/**
 * Export the Button component
 */
export default Button;
