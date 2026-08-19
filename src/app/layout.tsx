import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/common/FloatingActions";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heavenincarnatetours.in"),
  title: "Tours and Travels in Mangadu & Chennai | Heaven Incarnate",
  description: "Plan your next journey with Heaven Incarnate Tours & Travels, a trusted travel agency and tour operator in Mangadu, Chennai, offering customized holiday packages and transport services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${lato.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Heaven Incarnate Tours & Travels",
              "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071",
              "@id": "",
              "url": "https://heavenincarnatetours.in",
              "telephone": "+919150067366",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mangadu, Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
