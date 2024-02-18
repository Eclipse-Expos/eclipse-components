import { FC } from "react";
import LoadingSpinner from "./LoadingSpinner";

/**
 * Loading Component (Center)
 *
 * @returns JSX.Element
 *
 * @example
 * <LoadingSpinnerCenter />
 */
const LoadingSpinnerCenter: FC = (): JSX.Element => (
  <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <LoadingSpinner />
  </section>
);

/**
 * Export the component
 */
export default LoadingSpinnerCenter;
