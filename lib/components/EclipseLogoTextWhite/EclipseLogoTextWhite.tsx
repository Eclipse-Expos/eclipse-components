/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, JSX } from "react";
import { HTMLSVGProps } from "./EclipseLogoTextWhite.types";
// @ts-ignore
import * as Logo from "./EclipseLogoTextWhite.svg?react";

/**
 * Eclipse Logo Component
 *
 * @returns JSX.Element
 */
const EclipseLogoTextWhite: FC<HTMLSVGProps> = (props): JSX.Element => (
  <Logo.default width={1080} height={200} {...props} />
);

/**
 * Export the Eclipse Logo component
 */
export default EclipseLogoTextWhite;
