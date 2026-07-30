import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/app/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/ui/AIAssistant";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CursorGlow from "@/components/ui/CursorGlow";
import CookieConsent from "@/components/ui/CookieConsent";
import AnimatedBackground from "@/components/animations/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "MirexTech | AI-Powered Software & Web Agency",
  description: "MirexTech builds modern websites, cross-platform mobile apps, custom AI Chatbots (RAG), and ERP/CRM systems with high performance and Vercel/Apple inspired designs.",
  keywords: "Web Development, AI Automation, SMM, Mobile Apps, Next.js, React Native, DeepSeek AI, ERP, CRM, Kanpur, Delhi, Noida",
  authors: [{ name: "Mohd Adnan", url: "https://mirextech.in" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-background-light dark:bg-background-dark min-h-screen flex flex-col justify-between">
        <Providers>
          {/* Cursor Glow mouse tracking layer */}
          <CursorGlow />
          
          {/* Neon animated mesh backdrop */}
          <AnimatedBackground />
          
          {/* Header navigation bar */}
          <Navbar />
          
          {/* Page contents */}
          <main className="flex-grow">{children}</main>
          
          {/* Footers */}
          <Footer />
          
          {/* Floating UI overlays */}
          <AIAssistant />
          <WhatsAppButton />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
