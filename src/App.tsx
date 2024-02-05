"use client";

import {
  StarBackground,
  MainWrapper,
  EclipseLogoLong,
  RadioButton,
  Checkbox,
} from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <>
      <StarBackground />

      <MainWrapper>
        <EclipseLogoLong />

        <RadioButton placeholder="Radio Button" />
        <RadioButton placeholder="Radio Button" />
        <Checkbox placeholder="Checkbox" />
      </MainWrapper>
    </>
  );
}
