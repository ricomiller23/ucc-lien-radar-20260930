import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UCC-1 Default & Senior Security Interest Radar | Autonomous Intelligence",
  description: "Forensic Search Engine for Defaulting Senior Secured Debentures & Foreclosure Arbitrage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#090d16] text-slate-100">
        {children}
      </body>
    </html>
  );
}
