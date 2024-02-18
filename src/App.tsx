"use client";

import {
  StarBackground,
  MainWrapper,
  EclipseLogoTextOrbGlow,
  RadioButton,
  Checkbox,
  TextField,
  EclipseLogoTextWhite,
} from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <>
      <StarBackground />

      <MainWrapper>
        <EclipseLogoTextOrbGlow />
        <EclipseLogoTextWhite />
        <TextField placeholder="Text Field" />

        <RadioButton placeholder="Radio Button" />
        <RadioButton placeholder="Radio Button" />
        <Checkbox placeholder="Checkbox" />
      </MainWrapper>
    </>
  );
}
