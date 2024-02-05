"use client";

import MainWrapper from "@/components/MainWrapper";
import StarBackground from "@/components/StarBackground";
import {
  Button,
  EclipseLogoLong,
  InputField,
  TextArea,
} from "../../../../src/index";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <StarBackground />

      <MainWrapper>
        <EclipseLogoLong />
        <InputField
          value={value}
          placeholder="Test"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button>Subscribe</Button>
      </MainWrapper>
    </>
  );
}
