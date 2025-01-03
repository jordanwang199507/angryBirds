import "./_styles/globals.css";
import localFont from "next/font/local";
const angryBirdsFont = localFont({
  src: "../public/fonts/FeastOfFleshBbItalic-qr0.ttf",
  variable: "--font-angry-birds",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>Angry Birds</title>
      </head>
      <body className={angryBirdsFont.variable}>{children}</body>
    </html>
  );
}
