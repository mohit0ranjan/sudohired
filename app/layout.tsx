import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from "@/components/theme-provider";
import { Shell } from "@/components/layout/Shell";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: "MockHire | Technical Interview Prep",
  description: "The modern platform for mastering technical interviews with AI-driven feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} ${jakarta.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Shell>
            {children}
          </Shell>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'font-mono text-xs bg-card border border-border text-foreground',
              style: {
                borderRadius: '4px',
                background: '#0a0f1c',
                color: '#f8fafc',
                border: '1px solid #1e293b'
              }
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
