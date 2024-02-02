"use client";

import { useState } from "react";
import { EclipseLogoLong, InputField, TextArea } from "../../../../src/index";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <EclipseLogoLong className="h-24 w-96" />
        <InputField
          placeholder="Test"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextArea
          placeholder="Test"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </main>
    </>
  );
}
