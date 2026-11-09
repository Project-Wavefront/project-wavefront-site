import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Wavefront",
  description:
    "Project Wavefront's student-built Mark I rotating detonation rocket engine completed 100 tests in November 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
