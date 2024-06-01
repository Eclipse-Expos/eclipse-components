"use client";

import { useState, JSX, ChangeEvent, FocusEvent, useEffect } from "react";
import { InputProps } from "./Input.types";
import { cn } from "../../utils/cn";
import React from "react";

/**
 * Eclipse Text Field Component
 *
 * @param props - InputProps
 * @returns JSX.Element
 *
 * @example
 * <Input placeholder="Enter your name" />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    /**
     * States for the text field
     */
    const [value, setValue] = useState<string | number | readonly string[]>(
      props.value || props.defaultValue || ""
    );

    const [active, setActive] = useState<boolean>(false);

    /**
     * Update the value when the value prop changes
     */
    useEffect(() => {
      setValue(props.value as string);
    }, [props.value]);

    /**
     * Custom on change event handler
     *
     * This is used to update the value in the state.
     */
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(() => e.target.value);

      if (props.onChange) {
        props.onChange(e);
      }
    };

    /**
     * Custom on focus event handler
     *
     * This is used to update the active state.
     */
    const onFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      setActive(true);

      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    /**
     * Custom on blur event handler
     *
     * This is used to update the active state.
     */
    const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      setActive(!!value);

      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    /**
     * Return the Text Field component JSX
     *
     * Wrap the content in a relative div first.
     */
    return (
      <div className={cn("relative", props.className)}>
        {/**
         * The actual text field
         */}
        <input
          {...props}
          type={props.type || "text"}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          value={value}
          onChange={(e) => onChange(e)}
          onFocus={(e) => onFocus(e)}
          onBlur={(e) => onBlur(e)}
        />

        {/**
         * This is the text content inside the text field.
         *
         * We use a span so that we can move the text up and down depending on
         * whether the user has inputted anything.
         */}
        <label
          className={cn(
            "font-display pointer-events-none absolute left-0 top-0 z-20 mx-2 my-2 px-2 text-sm font-light tracking-wider text-primary transition-all duration-200 ease-in-out before:absolute before:left-0 before:top-1/2 before:z-[-1] before:h-2 before:w-full before:-translate-y-[1px] before:bg-transparent before:transition-colors before:duration-300 before:ease-out before:content-[''] peer-focus:-top-[1.2rem] peer-focus:left-1 peer-focus:mx-2 peer-focus:px-2 peer-focus:text-sm",
            active ? "left-0 -top-[1.2rem] mx-2 px-2 text-xs bg-background" : "" // Keep the label up if there's a value
          )}
        >
          {props.label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

/**
 * Export the text field by default.
 */
export { Input };
