/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, JSX } from "react";
import { LogoProps } from "./EclipseLogoTextBlack.types";
// @ts-ignore
import * as Logo from "./EclipseLogoTextBlack.svg?react";

/**
 * Eclipse Logo Component
 *
 * @param props - LogoProps
 * @returns JSX.Element
 *
 * @example
 * <EclipseLogoTextBlack />
 */
const EclipseLogoTextBlack: FC<LogoProps> = (props): JSX.Element => (
  <Logo.default width={1080} height={200} {...props} />
);

/**
 * Export the Eclipse Logo component
 */
export { EclipseLogoTextBlack };
