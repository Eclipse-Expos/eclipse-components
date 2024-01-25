import React, { ReactNode } from "react"

interface CardProps {
  title: string
  children: ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="mt-4">{children}</div>
    </div>
  )
}
