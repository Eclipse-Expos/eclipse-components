/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, JSX } from "react";
import { LogoProps } from "./EclipseLogoTextWhite.types";
// @ts-ignore
import * as Logo from "./EclipseLogoTextWhite.svg?react";

/**
 * Eclipse Logo Component
 *
 * @param props - LogoProps
 * @returns JSX.Element
 *
 * @example
 * <EclipseLogoTextWhite />
 */
const EclipseLogoTextWhite: FC<LogoProps> = (props): JSX.Element => (
  <Logo.default width={1080} height={200} {...props} />
);

/**
 * Export the Eclipse Logo component
 */
export { EclipseLogoTextWhite };
