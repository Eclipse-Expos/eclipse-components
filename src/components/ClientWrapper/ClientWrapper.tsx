"use client";

import { FC, PropsWithChildren, ReactNode } from "react";

/**
 * Eclipse Client Wrapper Component
 *
 * @returns JSX.Element
 */
const ClientWrapper: FC<PropsWithChildren> = (props): ReactNode => {
  return props.children;
};

/**
 * Export the client wrapper by default.
 */
export default ClientWrapper;
