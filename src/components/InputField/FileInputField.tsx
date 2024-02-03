import React, { FC, JSX } from "react";
import { CustomInputProps, InputProps } from "./InputField.types";
import { InputField } from "..";

/**
 * Eclipse File Input Field Component
 *
 * @returns JSX.Element
 */
const FileInputField: FC<CustomInputProps & InputProps> = (
  props,
): JSX.Element => <InputField type="file" {...props} value={props.value} />;

/**
 * Export the input field by default.
 */
export default FileInputField;
