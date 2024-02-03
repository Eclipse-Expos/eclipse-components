import React, { FC, JSX } from "react";
import { CustomInputProps, InputProps } from "./InputField.types";
import { InputField } from "..";

/**
 * Eclipse Date Input Field Component
 *
 * @returns JSX.Element
 */
const DateInputField: FC<CustomInputProps & InputProps> = (
  props,
): JSX.Element => <InputField type="date" {...props} value={props.value} />;

/**
 * Export the input field by default.
 */
export default DateInputField;
