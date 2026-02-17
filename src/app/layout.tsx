import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick Bogucki - Portfolio",
  description: "Finding problems and building solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                  // Page was restored from bfcache — force repaint
                  document.body.style.display = 'none';
                  document.body.offsetHeight; // trigger reflow
                  document.body.style.display = '';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
