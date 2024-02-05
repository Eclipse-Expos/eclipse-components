import { FC, JSX } from "react";
import { cn } from "../../utils/cn";
import { HTMLInputProps } from "./DatePicker.types";

/**
 * Eclipse Date Picker Component
 *
 * @returns JSX.Element
 */
const DatePicker: FC<HTMLInputProps> = (props): JSX.Element => (
  <input
    {...props}
    type="date"
    className={cn(
      "rounded-none border-2 border-primary bg-background p-3 font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50",
      props.className
    )}
  />
);

/**
 * Export the Date Picker by default.
 */
export default DatePicker;
