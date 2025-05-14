import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
})

// Update the metadata
export const metadata: Metadata = {
  title: "Nachiket Dighe | Personal Portfolio",
  description: "Web developer specializing in modern frontend and backend technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
