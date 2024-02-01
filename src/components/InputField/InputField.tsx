/**
 * Import React and the required types from React.
 */
import React, {
  ChangeEvent,
  FC,
  useState,
  JSX,
  // ReactNode,
  InputHTMLAttributes,
} from "react";

/**
 * Import the 'cn' utility function to merge component classnames
 */
import { cn } from "@/lib/utilts/cn";

/**
 * Default Props Values for the Input Field
 *
 * We use these in the case that the provided props are empty.
 */
const DEFAULT_PROPS = {
  className: "",
  defaultValue: "",
  placeholder: "",
};

/**
 * Input Field Props
 *
 * These are used to define the props for the input field component.
 */
type InputFieldProps = {
  /**
   * The input field custom className.
   *
   * This value can be empty. If it is, then the default className of (empty string)
   * will be assigned. The provided className is merged with the current: "relative".
   */
  className?: string;
  /**
   * The input field default value.
   *
   * This value can be empty. If it is, then the default value of (empty string)
   * will be assigned.
   */
  defaultValue?: string;
  /**
   * The input field placeholder.
   *
   * This value can be empty. If it is, then the default placeholder of (empty string)
   * will be assigned.
   */
  placeholder?: string;
  /**
   * The input field children
   *
   * This is used to pass children to the input field component.
   *
   * This feature currently is not used.
   */
  // children?: ReactNode;
};

/**
 * Eclipse Input Field Component
 *
 * @returns JSX.Element
 */
const InputField: FC<
  InputFieldProps & InputHTMLAttributes<HTMLInputElement>
> = (props): JSX.Element => {
  /**
   * Set to client
   */
  "use client";

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
    <div className={cn("relative", props.className)}>
      {/**
       * The actual input field.
       */}
      <input
        className="peer w-full rounded-none border-2 border-primary bg-background p-3 font-sans font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50"
        value={value}
        onChange={onChange}
        placeholder="" // No placeholder. We use a span for this.
        disabled={props.disabled}
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
