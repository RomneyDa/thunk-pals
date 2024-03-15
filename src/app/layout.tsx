import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Thunkpal",
  description: "Your data team",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-auto no-scrollbar min-h-screen max-w-screen bg-background font-sans antialiased",
          fontSans.variable
        )}

      // onScroll={(e) => {
      //   console.log(0)
      //   // setScrollPosition(e.currentTarget.scrollTop);
      // }}
      >
        {children}
      </body>
    </html>
  );
}
