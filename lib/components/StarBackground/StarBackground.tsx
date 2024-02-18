import { FC, JSX } from "react";
import stars from "./stars.module.scss";
import { HTMLElementProps } from "./StarBackground.types";

/**
 * Eclipse StarBackground Component
 *
 * @param props - HTMLDivProps
 * @returns JSX.Element
 *
 * @example
 * <StarBackground />
 */
const StarBackground: FC<HTMLElementProps> = (props): JSX.Element => {
  return (
    <div {...props}>
      <div className={stars.background}></div>
      <div className={stars.foreground}></div>
    </div>
  );
};

export default StarBackground;
