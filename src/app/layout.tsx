import type { Metadata } from "next";
import "../sass/main.sass";

export const metadata: Metadata = {
  title: process.env.TITLE,
  description: process.env.DESC,
  robots: {
    follow: false,
    index: false,
    noarchive: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
