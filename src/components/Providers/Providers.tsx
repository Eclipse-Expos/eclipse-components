import React, { FC, ReactNode, JSX } from "react";
import { NextUIProvider } from "@nextui-org/react";

/**
 * Eclipse Providers Component
 *
 * @returns JSX.Element
 */
const Providers: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

/**
 * Export the providers by default.
 */
export default Providers;
