import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Root } from '@/app/root/root'
import { useLaunchParams } from '@telegram-apps/sdk-react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coordinape Telegram Miniapp",
  description: "Miniapp for Coordinape Telegram Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Root>
        <body className={inter.className}>
          {children}
        </body>
      </Root>
    </html>
  );
}
