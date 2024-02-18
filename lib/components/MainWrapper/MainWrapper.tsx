import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLElementProps } from "./MainWrapper.types";

/**
 * Eclipse MainWrapper Component
 *
 * @param props - HTMLElementProps
 * @returns JSX.Element
 *
 * @example
 * <MainWrapper>
 *  <h1>Hello World</h1>
 * </MainWrapper>
 */
const MainWrapper: FC<HTMLElementProps> = (props): JSX.Element => (
  <main
    {...props}
    className={cn(
      "flex min-h-screen items-center justify-center p-24",
      props.className?.includes("flex-wrap") ? "flex-wrap" : "flex-col",
      props.className
    )}
  >
    {props.children}
  </main>
);

/**
 * Export the component
 */
export default MainWrapper;
