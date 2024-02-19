/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, JSX, ReactNode, Suspense } from "react";
import { HTMLSVGProps } from "./EclipseLogoTextOrbGlow.types";
// @ts-ignore
import * as Logo from "./EclipseLogoTextOrbGlow.svg?react";
import EclipseLogoTextOrbWhite from "../EclipseLogoTextOrbWhite";

/**
 * Eclipse Logo Component
 *
 * @param props - HTMLSVGProps
 * @returns JSX.Element
 *
 * @example
 * <EclipseLogoTextOrbGlow />
 */
const EclipseLogoTextOrbGlow: FC<
  HTMLSVGProps & {
    suspenseFallback?: ReactNode;
  }
> = (props): JSX.Element => (
  <Suspense fallback={props.suspenseFallback ?? <EclipseLogoTextOrbWhite />}>
    <Logo.default width={1080} height={200} {...props} />
  </Suspense>
);

/**
 * Export the Eclipse Logo component
 */
export default EclipseLogoTextOrbGlow;
