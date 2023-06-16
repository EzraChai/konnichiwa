import "./globals.css";
import { Aoboshi_One } from "next/font/google";

const inter = Aoboshi_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Konnichiwa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
