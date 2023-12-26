import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GlobalWrapper from "@/lib/GlobalWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Network | Developers job hunting area",
  description: "Developers job hunting area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <GlobalWrapper>
          <Navbar />
          {children}
          <Footer />
        </GlobalWrapper>
      </body>
    </html>
  );
}
