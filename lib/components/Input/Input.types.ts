import { DetailedHTMLProps, InputHTMLAttributes } from "react";

/**
 * Text Field Props type definition
 */
export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};
