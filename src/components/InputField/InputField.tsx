import React, { useState, FC, JSX } from "react";
import { cn } from "@/lib/utils/cn";
import { CustomInputProps, InputProps } from "./InputField.types";

/**
 * Eclipse Input Field Component
 *
 * DateInputField and FileInputField are also components that use InputField.
 * Use them instead of this component if you need a date or file input field.
 *
 * @returns JSX.Element
 */
const InputField: FC<CustomInputProps & InputProps> = (props): JSX.Element => {
  /**
   * Set the component to client side rendering
   */
  "use client";

  /**
   * States for the input field value
   */
  const [value, setValue] = useState<string>(
    props.value || props.defaultValue || "",
  );

  /**
   * Custom on change event handler
   *
   * This is used to update the value in the state.
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    props.onChange?.(e);
  };

  /**
   * Return the Input Field component JSX
   *
   * Wrap the content in a relative div first.
   */
  return (
    <div className={cn("relative", props.className)}>
      {/**
       * The actual input field.
       */}
      <input
        {...props}
        className="peer w-full rounded-none border-2 border-primary bg-background p-3 font-sans font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50"
        placeholder="" // No placeholder. We use a span for this.
        value={value}
        onChange={onChange}
      />

      {/**
       * This is the text content inside the input field.
       *
       * We use a span so that we can move the text up and down depending on
       * whether the user has inputted anything.
       */}
      <span
        className={cn(
          "font-display pointer-events-none absolute left-0 top-2 z-20 mx-2 my-2 px-2 text-sm font-light tracking-wider text-primary transition-all duration-200 ease-in-out before:absolute before:left-0 before:top-1/2 before:z-[-1] before:h-2 before:w-full before:-translate-y-[1px] before:bg-background before:transition-colors before:duration-300 before:ease-out before:content-[''] peer-focus:-top-[1.2rem] peer-focus:left-1 peer-focus:mx-2 peer-focus:px-2 peer-focus:text-sm",
          value ? "left-1 -top-[1.2rem] mx-2 px-2 text-sm" : "", // Keep the label up if there's a value
        )}
      >
        {props.placeholder}
      </span>
    </div>
  );
};

/**
 * Export the input field by default.
 */
export default InputField;
