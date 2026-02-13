import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMverse Marketplace",
  description: "Universe-first NFT marketplace: Worlds • Elements • Mutation • Identity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#050507] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

