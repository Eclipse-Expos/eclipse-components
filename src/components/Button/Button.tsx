import { cn } from "@/lib/utils/cn";
import React, { JSX, FC, ButtonHTMLAttributes, PropsWithChildren } from "react";

/**
 * Custom Button Props type definition
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type CustomButtonProps = {
  className?: string;
};

/**
 * Ignored Button Props
 *
 * These are the props that are ignored when passed to the button.
 */
const IGNORED_BUTTON_PROPS = ["className", "children"];

/**
 * Eclipse Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<CustomButtonProps & PropsWithChildren<ButtonProps>> = (
  props,
): JSX.Element => {
  /**
   * Filter the props to remove the ignored props.
   *
   * This is done to prevent the ignored props from being passed to the button.
   */
  const FILTERED_PROPS = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !IGNORED_BUTTON_PROPS.includes(key),
    ),
  );

  /**
   * Return the button JSX
   */
  return (
    <button
      className={cn(
        "border-2 border-primary bg-primary px-2 py-3 text-sm tracking-wider text-slate-900 outline-2 outline-primary duration-300 ease-in-out hover:border-primary hover:bg-background hover:text-primary hover:outline-primary disabled:opacity-50",
        props.className,
      )}
      {...FILTERED_PROPS}
    >
      {props.children}
    </button>
  );
};

/**
 * Export the Button component
 */
export default Button;
