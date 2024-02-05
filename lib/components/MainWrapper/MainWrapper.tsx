import { cn } from "../../utils/cn";
import { JSX, FC, PropsWithChildren } from "react";
import { HTMLElementProps } from "./MainWrapper.types";

/**
 * Eclipse Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<PropsWithChildren<HTMLElementProps>> = (
  props
): JSX.Element => (
  <main
    className={cn(
      "flex min-h-screen items-center justify-center p-24",
      props.className?.includes("flex-wrap") ? "flex-wrap" : "flex-col",
      props.className
    )}
  >
    {props.children}
  </main>
);

/**
 * Export the Button component
 */
export default Button;
