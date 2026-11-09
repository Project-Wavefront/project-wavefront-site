import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | Project Wavefront",
  description:
    "Apply to join Project Wavefront at projectwavefront.org/contact.",
};

export default function JoinUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
