import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import "./globals.css"
import { Rajdhani } from "next/font/google"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "SteelCity - Building the spaces where memories are made",
  description: "SteelCity construction and steel manufacturing company",
  icons:{
    icon:"/images/icon.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} font-sans`}>{children}</body>
    </html>
  )
}