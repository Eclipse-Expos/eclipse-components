import { InputHTMLAttributes } from "react";

/**
 * Input Props type definition
 */
export type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;
export interface CustomInputProps {
  value?: string;
  defaultValue?: string;
}
