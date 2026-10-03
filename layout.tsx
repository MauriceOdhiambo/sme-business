import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BiasharaOS — SME Business Operating System",
  description: "Kenya-first business management for growing SMEs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
