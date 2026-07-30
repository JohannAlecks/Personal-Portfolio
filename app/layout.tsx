import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./global.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: {
    default: "Johann Alecksandrei G. Factora | Portfolio",
    template: "%s | Johann Alecksandrei G. Factora",
  },
  description:
    "Computer Engineering graduate focused on backend systems, APIs, and full-stack applications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Johann Alecksandrei G. Factora | Portfolio",
    description:
      "Computer Engineering graduate focused on backend systems, APIs, and full-stack applications.",
    type: "website",
    url: "https://your-domain.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johann Alecksandrei G. Factora | Portfolio",
    description:
      "Computer Engineering graduate focused on backend systems, APIs, and full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
