import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLRadioButtonProps } from "./RadioButton.types";

/**
 * Eclipse Radio Button Component
 *
 * @returns JSX.Element
 */
const RadioButton: FC<HTMLRadioButtonProps> = (props): JSX.Element => {
  const id = Math.random().toString(36);

  return (
    <span className="flex flex-row gap-2">
      <input
        {...props}
        id={props.id || id}
        type="radio"
        name="radio"
        className="hidden"
      />
      <label
        htmlFor={props.id || id}
        className={cn(
          "flex items-center cursor-pointer text-white",
          props.className
        )}
      >
        <span className="w-5 h-5 inline-block mr-1 border border-grey"></span>
        {props.placeholder}
      </label>
    </span>
  );
};

/**
 * Export the Radio Button component
 */
export default RadioButton;
