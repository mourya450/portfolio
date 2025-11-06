import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Amitabh | Frontend Developer",
  description: "Portfolio showcasing frontend projects and skills.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider>
          {/* 🧭 Navbar should not restrict width */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>

          {/* 🏠 Page content (children) */}
          <main className="w-full min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
