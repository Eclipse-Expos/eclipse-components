/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, JSX } from "react";
import { HTMLSVGProps } from "./EclipseLogoTextOrbGlow.types";
// @ts-ignore
import * as Logo from "./EclipseLogoTextOrbGlow.svg?react";

/**
 * Eclipse Logo Component
 *
 * @param props - HTMLSVGProps
 * @returns JSX.Element
 *
 * @example
 * <EclipseLogoTextOrbGlow />
 */
const EclipseLogoTextOrbGlow: FC<HTMLSVGProps> = (props): JSX.Element => (
  <Logo.default width={1080} height={200} {...props} />
);

/**
 * Export the Eclipse Logo component
 */
export default EclipseLogoTextOrbGlow;
