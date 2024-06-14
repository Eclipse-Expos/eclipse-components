import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

/**
 * Text Area Props type definition
 */
export type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
};
