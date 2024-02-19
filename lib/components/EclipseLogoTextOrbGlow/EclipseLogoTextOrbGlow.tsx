/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, JSX, ReactNode, Suspense } from "react";
import { HTMLSVGProps } from "./EclipseLogoTextOrbGlow.types";
import { LoadingSpinnerCenter } from "../LoadingSpinner";
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
const EclipseLogoTextOrbGlow: FC<
  HTMLSVGProps & {
    suspenseFallback?: ReactNode;
  }
> = (props): JSX.Element => (
  <Suspense fallback={props.suspenseFallback ?? <LoadingSpinnerCenter />}>
    <Logo.default width={1080} height={200} {...props} />
  </Suspense>
);

/**
 * Export the Eclipse Logo component
 */
export default EclipseLogoTextOrbGlow;
