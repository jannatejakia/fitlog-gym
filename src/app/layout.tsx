import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import PlanProvider from "@/context/PlanContext";
import Footer from "@/components/shared/Footer";
import { Suspense } from 'react';
import ToastProvider from "./ToastProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FITLOG  | Fitlog - Track Your Fitness Journey",
  description: "A fitness tracking app to help you log your workouts and track your progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
          <PlanProvider>
            <ToastContainer />
            <ToastProvider>
              <Suspense fallback={null}>
                <header className="sticky top-0 z-50 bg-[#0c0d10]/90 backdrop-blur-md shadow-md">
                  <Navbar />
                </header>
              </Suspense>
              <main className="flex-1">
                {children}
              </main>
          <Footer />
            </ToastProvider>
          </PlanProvider>
      </body>
    </html>
  );
}
