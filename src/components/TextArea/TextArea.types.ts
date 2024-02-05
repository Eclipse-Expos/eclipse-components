import { TextareaHTMLAttributes } from "react";

/**
 * Text Area Props type definition
 */
export type HTMLTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface CustomTextAreaProps {
  value?: string;
  defaultValue?: string;
}
