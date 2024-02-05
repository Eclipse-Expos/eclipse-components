import {
  InputHTMLAttributes,
  DetailedHTMLProps,
  LabelHTMLAttributes,
} from "react";

/**
 * HTML Radio Button Props type definition
 */
export type HTMLCheckboxProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
