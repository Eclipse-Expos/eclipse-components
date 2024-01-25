"use client";

import Image from "next/image";

import { Card } from "@realtristan/components-eclipseexpos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card title="Welcome to your new app!">
        <p className="m-0">
          Get started by editing{" "}
          <code className="font-mono">src/app/page.tsx</code>
        </p>
      </Card>
    </main>
  );
}
