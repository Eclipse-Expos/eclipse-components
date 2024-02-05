import { FC } from "react";
import stars from "./stars.module.scss";

const StarBackground: FC = (): JSX.Element => {
  return (
    <>
      <div className={stars.background}></div>
      <div className={stars.foreground}></div>
    </>
  );
};

export default StarBackground;
