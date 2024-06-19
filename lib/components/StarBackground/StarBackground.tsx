import { FC, JSX } from "react";
import stars from "./stars.module.scss";
import { StarBackgroundProps } from "./StarBackground.types";

/**
 * Eclipse StarBackground Component
 *
 * @param props - StarBackgroundProps
 * @returns JSX.Element
 *
 * @example
 * <StarBackground />
 */
const StarBackground: FC<StarBackgroundProps> = (props): JSX.Element => {
  return (
    <div {...props}>
      <div className={stars.background}></div>
      <div className={stars.foreground}></div>
    </div>
  );
};

/**
 * Export the component
 */
export { StarBackground };
