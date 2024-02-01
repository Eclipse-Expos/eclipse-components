/**
 * Import React and the required types from React.
 */
import { FC, ReactNode } from "react";

/**
 * Client Wrapper Props
 */
type ClientWrapperProps = {
  /**
   * The wrapper children
   *
   * This is used to pass children to the component.
   */
  children?: ReactNode;
};

/**
 * Eclipse Client Wrapper Component
 *
 * @returns JSX.Element
 */
const ClientWrapper: FC<ClientWrapperProps> = (props): ReactNode => {
  /**
   * Set to client
   */
  "use client";

  /**
   * Return the wrapper component JSX
   */
  return props.children;
};

/**
 * Export the client wrapper by default.
 */
export default ClientWrapper;
