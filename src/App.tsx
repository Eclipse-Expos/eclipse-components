"use client";

import {
  StarBackground,
  MainWrapper,
  EclipseLogoLong,
  RadioButton,
  Checkbox,
  TextField,
} from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <>
      <StarBackground />

      <MainWrapper>
        <EclipseLogoLong />
        <TextField placeholder="Text Field" />

        <RadioButton placeholder="Radio Button" />
        <RadioButton placeholder="Radio Button" />
        <Checkbox placeholder="Checkbox" />
      </MainWrapper>
    </>
  );
}
