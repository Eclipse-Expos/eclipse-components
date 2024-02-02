"use client";

import { useState } from "react";
import { InputField } from "../../../../src/index";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <main className="flex min-h-screen w-screen h-screen flex-col items-center justify-center p-24">
      <InputField
        placeholder="Test"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </main>
  );
}
