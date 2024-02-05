import { DetailedHTMLProps, InputHTMLAttributes } from "react";

/**
 * Text Field Props type definition
 */
export type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextFieldType = "text" | "password" | "email" | "number";
