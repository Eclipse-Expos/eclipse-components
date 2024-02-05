import React, { FC, JSX } from "react";
import { InputField } from "..";
import { TextFieldProps } from "@mui/material";

/**
 * Eclipse Date Input Field Component
 *
 * @returns JSX.Element
 */
const DateInputField: FC<TextFieldProps> = (props): JSX.Element => (
  <InputField type="date" {...props} />
);

/**
 * Export the input field by default.
 */
export default DateInputField;
