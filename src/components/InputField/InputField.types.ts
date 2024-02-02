import { InputHTMLAttributes } from "react";

/**
 * Custom Input Props type definition
 */
export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export interface CustomInputProps {
  value?: string;
  className?: string;
  defaultValue?: string;
}
