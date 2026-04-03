import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarConfigProvider } from "@/contexts/sidebar-context";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "biz.nl — Jouw merk in minuten",
  description: "Professionele merkidentiteit voor Nederlandse ondernemers. Logo, website en social media assets in één pakket.",
  openGraph: {
    title: "biz.nl — Jouw merk in minuten",
    description: "Professionele merkidentiteit voor Nederlandse ondernemers.",
    url: "https://biz.nl",
    siteName: "biz.nl",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="nextjs-ui-theme">
          <SidebarConfigProvider>
            {children}
          </SidebarConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
