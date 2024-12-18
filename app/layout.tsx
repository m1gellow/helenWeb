import type { Metadata } from "next";
import { Roboto, PT_Serif } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
});
const ptSerif = PT_Serif({
  variable: "--font-ptSerif",
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title:{
    default: "Helen blog",
    template: "%s | Helen blog"
  },
  description: "Я репертитор со стажем!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${ptSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
