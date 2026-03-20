import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cross-Border E-commerce Tools Directory',
  description: 'Hand-picked tools for cross-border sellers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
