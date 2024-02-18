import { FC, JSX } from "react";
import { cn } from "../../utils/cn";
import { HTMLSvgProps } from "./LoadingSpinner.types";

/**
 * Loading Component (Center)
 *
 * @returns JSX.Element
 *
 * @example
 * <LoadingSpinnerCenter />
 */
export const LoadingSpinnerCenter: FC = (): JSX.Element => (
  <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <LoadingSpinner />
  </section>
);

/**
 * Loading Component (Relative)
 *
 * @param props.className - The class name of the loading spinner
 * @returns JSX.Element
 *
 * @example
 * <LoadingSpinner className="h-5 w-5" />
 */
export const LoadingSpinner: FC<HTMLSvgProps> = (props): JSX.Element => (
  <svg
    {...props}
    className={cn("z-10 h-20 w-20 animate-spin text-primary", props.className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      className="fill-primary"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0
            12h4zm2 5.291A7.962 7.962 0 014 12H0c0
            3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
