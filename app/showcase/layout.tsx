import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Showcase | Nachiket Dighe",
  description: "Detailed showcase of Nachiket Dighe's experiences and achievements",
}

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
