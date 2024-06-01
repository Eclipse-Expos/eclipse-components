import { FC } from "react";
import { Spinner } from "./Spinner";

/**
 * Center Spinner Component
 *
 * @returns JSX.Element
 *
 * @example
 * <SpinnerCenter />
 */
const SpinnerCenter: FC = (): JSX.Element => (
  <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <Spinner />
  </section>
);

/**
 * Export the component
 */
export { SpinnerCenter };
