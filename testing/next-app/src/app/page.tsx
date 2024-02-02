"use client";

import MainWrapper from "@/components/MainWrapper";
import StarBackground from "@/components/StarBackground";
// @ts-ignore
import { Button, EclipseLogoLong, InputField } from "../../../../src/index";

export default function Home() {
  return (
    <>
      <StarBackground />

      <MainWrapper>
        <EclipseLogoLong />
        <InputField placeholder="Test" />
        <Button>Subscribe</Button>
      </MainWrapper>
    </>
  );
}
