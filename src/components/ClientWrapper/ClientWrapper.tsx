"use client";

import { FC, ReactNode } from "react";
import { ClientWrapperProps } from "./ClientWrapper.types";

/**
 * Eclipse Client Wrapper Component
 *
 * @returns JSX.Element
 */
const ClientWrapper: FC<ClientWrapperProps> = (props): ReactNode => {
  return props.children;
};

/**
 * Export the client wrapper by default.
 */
export default ClientWrapper;
