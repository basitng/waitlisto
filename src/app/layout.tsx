import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waitlisto",
  description: "General waitlist for your next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-backgroundClr">
      <ThemeProvider defaultTheme="dark">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
