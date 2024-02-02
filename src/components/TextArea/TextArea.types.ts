import { TextareaHTMLAttributes } from "react";

/**
 * Custom Text Area Props type definition
 */
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface CustomTextAreaProps {
  value?: string;
  className?: string;
  defaultValue?: string;
}
