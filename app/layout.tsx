import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Maaz | Frontend Developer",
    template: "%m | Maaz",
  },
  description:
    "Maaz is a passionate Frontend Developer specializing in React and Next.js, building clean, modern and scalable web applications.",
  openGraph: {
    title: "Maaz | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js. Building modern, responsive and high-performance web experiences.",
    url: "https://github.com/Maaz-webdeveloper",
    siteName: "Maaz Portfolio",
    images: [
      {
        url: "/og.png", // agar apka apna og image ho to yahan path do
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Maaz | Frontend Developer",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
