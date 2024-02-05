import { FC, JSX } from "react";
import { cn } from "../../utils/cn";
import { HTMLInputProps } from "./FileInput.types";

/**
 * Eclipse File Input Component
 *
 * @returns JSX.Element
 */
const FileInput: FC<HTMLInputProps> = (props): JSX.Element => (
  <input
    {...props}
    type="file"
    className={cn(
      "rounded-none border-2 border-primary bg-background p-3 font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50",
      props.className
    )}
  />
);

/**
 * Export the file input by default.
 */
export default FileInput;
