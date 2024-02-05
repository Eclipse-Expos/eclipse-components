import React from "react";
// @ts-ignore
import stars from "./stars.module.scss";

export default function StarBackground(): JSX.Element {
  return (
    <>
      <div className={stars.background}></div>
      <div className={stars.foreground}></div>
    </>
  );
}
