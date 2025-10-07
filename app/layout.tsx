import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ParcelWise - Ship Smarter with PostNL Integration",
  description: "Create shipping labels, track orders, and manage your logistics in one powerful dashboard. Save time and reduce costs by up to 40%.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
