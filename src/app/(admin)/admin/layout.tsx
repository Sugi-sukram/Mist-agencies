import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
// import Head from "next/head";
import '@ant-design/v5-patch-for-react-19';
import theme from "@/theme/theme";
import Appicon from "@/assets/appIcon.png";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIST AGENCIES - Premium Mineral Water",
  description:
    "MIST AGENCIES provides premium mineral water that offers a refreshing, healthy option with a unique taste profile, catering to discerning customers.",
  keywords:
    "mineral water, premium water, healthy water, refreshing drink, MIST AGENCIES, bottled water,MIST",
  // author: "MIST AGENCIES",
  robots: "index, follow", // Allows search engine crawlers to index the page
  icons: {
    icon: Appicon.src,
  },
  openGraph: {
    title: "MIST AGENCIES - Premium Mineral Water",
    description:
      "Enjoy the refreshing taste of premium mineral water from MIST AGENCIES. Pure, healthy, and refreshing.",
    url: "https://www.mistagencies.com", // Replace with your URL
    type: "website",
    images: [
      {
        url: "https://www.mistagencies.com/images/og-image.jpg", // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "MIST AGENCIES premium mineral water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MistAgencies", // Replace with your Twitter handle
    title: "MIST AGENCIES - Premium Mineral Water",
    description:
      "Discover the fresh taste of MIST AGENCIES' mineral water, perfect for hydration and health.",
    // image: Appicon.src, // Replace with your Twitter card image URL
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <title>Mist Agencies</title>
        <meta name="description" content="Mineral water with great quality" />
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body>
        <ConfigProvider theme={theme.dark}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
