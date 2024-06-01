import * as React from "react";
import { Input } from "../Input";

/**
 * Eclipse File Input Component
 *
 * @param props - HTMLInputProps
 * @returns JSX.Element
 *
 * @example
 * <FileInput placeholder="Select a file" />
 */
const FileInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => <Input {...props} type="file" />;

/**
 * Export the file input by default.
 */
export { FileInput };
