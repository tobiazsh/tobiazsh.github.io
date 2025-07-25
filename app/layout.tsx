import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./styles/globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobiazsh",
  description: "About Me"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className}`}>
        {children}
      </body>
    </html>
  );
}
