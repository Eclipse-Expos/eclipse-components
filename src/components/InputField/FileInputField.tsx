import React, { FC, JSX } from "react";
import { InputField } from "..";
import { TextFieldProps } from "@mui/material";

/**
 * Eclipse File Input Field Component
 *
 * @returns JSX.Element
 */
const FileInputField: FC<TextFieldProps> = (props): JSX.Element => (
  <InputField type="file" {...props} />
);

/**
 * Export the input field by default.
 */
export default FileInputField;
