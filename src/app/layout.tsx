import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Math Tutor",
    template: "%s | Math Tutor"
  },
  description:
    "A free math tutoring platform planned for learners from early numeracy to advanced research mathematics."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

