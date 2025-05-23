import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";

import ReactQueryProvider from "@/providers/react-query-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Palabras Palindromes",
  description:
    "Palabras Palindromes: Formulario para verificar las palabras palindromes y Listarlas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
