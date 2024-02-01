"use client";

/**
 * Library Imports
 *
 * We use the 'cn' function for merging component classNames
 */
import React, { ChangeEvent, FC, useState, JSX } from "react";
import { cn } from "lib/utilts/cn";

/**
 * Default Props Values for the Input Field
 */
const DEFAULT_PROPS = {
  className: "",
  defaultValue: "",
};

/**
 * Input Field Props
 */
type InputFieldProps = {
  /**
   * The input field type.
   */
  className?: string;
  /**
   * The input field default value.
   */
  defaultValue?: string;
  /**
   * When the input field is accessed and changed, this function is called.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The input field placeholder.
   */
  placeholder: string;
};

/**
 * Eclipse Input Field Component
 *
 * @param props.className -- The custom classname for the input field
 * @param props.defaultValue -- The default value for the input field. (None: "")
 * @param props.onChange -- When the input field is accessed and changed, this function is called
 * @param palceholder -- The custom placeholder for the input field
 * @returns
 */
const InputField: FC<InputFieldProps> = (props): JSX.Element => {
  /**
   * Manage the value state.
   */
  const [value, setValue] = useState<string>(
    props.defaultValue ?? DEFAULT_PROPS.defaultValue,
  );

  /**
   * When the input field is accessed and changed, this function is called.
   *
   * @param e The change event
   */
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(e);
    setValue(e.target.value);
  }

  /**
   * Return the Input Field component JSX
   *
   * Wrap the content in a relative div first.
   */
  return (
    <div className={cn("group relative", props.className)}>
      {/**
       * The actual input field.
       */}
      <input
        className="peer w-full rounded-none border-2 border-primary bg-background p-3 font-sans font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50"
        value={value}
        onChange={onChange}
        {...props}
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
          value && // Keep the label up if there's a value
            "left-1 top-[-1.2rem] mx-2 px-2 text-sm",
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
