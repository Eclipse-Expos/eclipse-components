import { ChangeEvent, FC, JSX, useState } from "react";
import { cn } from "../../utils/cn";
import { HTMLTextAreaProps } from "./TextArea.types";

/**
 * Eclipse Text Area Component
 *
 * @returns JSX.Element
 */
const TextArea: FC<HTMLTextAreaProps> = (props): JSX.Element => {
  /**
   * Store the value in a state
   *
   * This is used to keep track of the text area value.
   */
  const [value, setValue] = useState<string | number | readonly string[]>(
    props.value || props.defaultValue || ""
  );

  /**
   * Custom on change event handler
   *
   * This is used to update the value in the state.
   */
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(() => e.target.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  /**
   * Return the Text Area Field component JSX
   *
   * Wrap the content in a relative div first.
   */
  return (
    <div className={cn("relative", props.className)}>
      {/**
       * The actual text area.
       */}
      <textarea
        {...props}
        className="peer w-full inline-block rounded-none border-2 border-primary bg-background p-3 font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50"
        placeholder="" // No placeholder. We use a span for this.
        value={value}
        onChange={onChange}
      />

      {/**
       * This is the placeholder inside the text area.
       *
       * We use a span so that we can move the text up and down depending on
       * whether the user has inputted anything.
       */}
      <label
        className={cn(
          "font-display pointer-events-none absolute left-0 top-2 z-20 mx-2 my-2 px-2 text-sm font-light tracking-wider text-primary transition-all duration-200 ease-in-out before:absolute before:left-0 before:top-1/2 before:z-[-1] before:h-2 before:w-full before:-translate-y-[1px] before:bg-background before:transition-colors before:duration-300 before:ease-out before:content-[''] peer-focus:-top-[1.2rem] peer-focus:left-1 peer-focus:mx-2 peer-focus:px-2 peer-focus:text-sm",
          value // Keep the label up if there's a value
            ? "left-1 top-[-1.2rem] mx-2 px-2 text-sm"
            : ""
        )}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

/**
 * Export the text area by default.
 */
export default TextArea;
