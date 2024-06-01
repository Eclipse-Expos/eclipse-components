import { cn } from "../../../utils/cn";
import { JSX, FC } from "react";
import { CheckIconProps } from "./CheckIcon.types";

/**
 * Eclipse Check Icon Component
 *
 * @param props - CheckIconProps
 * @returns JSX.Element
 *
 * @example
 * <CheckIcon />
 */
const CheckIcon: FC<CheckIconProps> = (props): JSX.Element => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    className={cn("fill-white", props.className)}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

/**
 * Export the Check Icon component
 */
export { CheckIcon };
