import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changing Lives",
  description: "Spread the love, touch a life.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
