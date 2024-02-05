"use client";

import MainWrapper from "@/components/MainWrapper";
import StarBackground from "@/components/StarBackground";
import {
  Button,
  EclipseLogoLong,
  TextField,
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
        <TextArea
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
