import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrationWrapper from "@/components/HydrationWrapper";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Amitabh Portfolio | Frontend Developer",
  description: "Frontend developer skilled in React, Next.js, modern UI and animations.",
  keywords: [
    "frontend developer",
    "react developer",
    "nextjs developer",
    "portfolio",
    "web developer India",
  ],
  metadataBase: new URL("https://amitabhportfolio.in"),

  openGraph: {
    title: "Amitabh Portfolio",
    description: "Creative frontend developer portfolio",
    url: "https://amitabhportfolio.in",
    siteName: "Amitabh Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amitabh Portfolio",
    description: "Creative frontend developer portfolio",
    images: ["/preview.png"],
  },
};



export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amitabh",
              "jobTitle": "Frontend Developer",
              "url": "https://amitabhportfolio.in",
            }),
          }}
        />
        <ThemeProvider>
          <HydrationWrapper>
            <div className="fixed top-0 left-0 w-full z-50">
              <Navbar />
            </div>

            <main className="w-full min-h-screen pt-20">
              <PageTransition>{children}</PageTransition>
            </main>

            <Footer />
          </HydrationWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
