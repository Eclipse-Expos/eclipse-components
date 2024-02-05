import React, { FC, JSX } from "react";
import { cn } from "@/lib/utils/cn";
import { CustomTextAreaProps, TextAreaProps } from "./TextArea.types";
import { TextareaAutosize } from "@mui/material";

/**
 * Eclipse Text Area Component
 *
 * @returns JSX.Element
 */
const TextArea: FC<CustomTextAreaProps & TextAreaProps> = (
  props,
): JSX.Element => (
  <TextareaAutosize
    {...props}
    className={cn(
      "peer w-full inline-block rounded-none border-2 border-primary bg-background p-3 font-sans font-light text-primary outline-none transition-all duration-200 ease-out placeholder:opacity-50 focus:border-primary disabled:opacity-50",
      props.className,
    )}
  />
);

/**
 * Export the text area by default.
 */
export default TextArea;
