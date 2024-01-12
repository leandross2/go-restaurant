import "@/styles/global.css"
import { Metadata } from "next"
import  "@/styles/global.css"
import { roboto } from "./fonts"

export const  metadata: Metadata = {
  title: "AAAA@",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
