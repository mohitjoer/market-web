import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import  Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'




export const metadata: Metadata = {
  title: "MarketWeb - Rent or Offer Ad Spots to Reach the Right Audience",
  description: "MarketWeb is a platform where you can rent ad spots or offer your own space—like social communities, YouTube, or Instagram—to help businesses reach their target audience effectively.",
  keywords: [
    "advertising platform",
    "rent ad spot",
    "sell ad space",
    "influencer marketing",
    "promote product",
    "community ads",
    "buy ad space",
    "digital marketing",
    "marketplace for advertising",
    "social media ads"
  ],
  authors: [{ name: "Mohit Joe", url: "https://github.com/mohitjoer" }],
  creator: "Mohit Joe",
  metadataBase: new URL("https://market-web-n1dz.vercel.app"),
  openGraph: {
    title: "MarketWeb - Rent or Offer Ad Spots Easily",
    description: "Easily promote your product or service or monetize your community by renting or offering advertising spots.",
    url: "https://market-web-n1dz.vercel.app",
    siteName: "MarketWeb",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
        baseTheme: dark,
      }}>
      <html lang="en">
        <body>
          <header>
            <Header/>
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
