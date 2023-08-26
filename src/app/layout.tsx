import NavBar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Tektur } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
});

export const metadata: Metadata = {
  title: "Medical System Disease Prediction",
  description: "Medical System Disease Prediction",
  authors: [
    {
      url: "https://github.com/joshuaolusayo",
      name: "Joshua Oyeleke",
    },
  ],
  creator: "Joshua Oyeleke",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${tektur.variable}`}
      suppressHydrationWarning
      suppressContentEditableWarning
    >
      <body className={outfit.className}>
        <Toaster />
        <div>
          <div className="bg-black text-center text-white py-3 rounded-b-xl">
            <p>Medical Prediction Made Easy</p>
          </div>
          <NavBar />
          <div className="overflow-y-scroll custom-height">
            <>
              {children}
              <Footer />
            </>
          </div>
        </div>
      </body>
    </html>
  );
}
