import { FC, JSX } from "react";
import stars from "./stars.module.scss";
import { HTMLDivProps } from "./StarBackground.types";

const StarBackground: FC<HTMLDivProps> = (props): JSX.Element => {
  return (
    <div {...props}>
      <div className={stars.background}></div>
      <div className={stars.foreground}></div>
    </div>
  );
};

export default StarBackground;
