import type { Metadata } from 'next';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading', // Define CSS variable for heading font
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body', // Define CSS variable for body font
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ganesh Bhel Experience',
  description: 'Authentic Indian Street Food Since 1978',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", openSans.variable)} suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          {/* Adjusted padding for better mobile view */}
          <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
