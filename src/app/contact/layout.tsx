import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | Project Wavefront",
  description:
    "Apply to join Project Wavefront, the undergraduate team behind Mark I's successful hotfire campaign.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
