import React, { FC, JSX } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { cn } from "@/lib/utils/cn";

/**
 * Eclipse Input Field Component
 *
 * DateInputField and FileInputField are also components that use InputField.
 * Use them instead of this component if you need a date or file input field.
 *
 * @returns JSX.Element
 */
const InputField: FC<TextFieldProps> = (props): JSX.Element => (
  <TextField
    {...props}
    id="outlined-basic"
    className={cn("rounded-none", props.className)}
    label={props.placeholder}
    placeholder=""
    variant="outlined"
  />
);

/**
 * Export the input field by default.
 */
export default InputField;
