import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maazdev.me"),

  title: {
    default: "Maaz | Frontend Developer",
    template: "%s | Maaz",
  },
  description:
    "Maaz is a passionate Frontend Developer specializing in React and Next.js, building clean, modern and scalable web applications.",
  authors: [{ name: "Maaz" }],
  creator: "Maaz",

  // ✅ Canonical link naye domain ke mutabiq automatic theek rahega
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "hpOHhtWOaYECGdjorKGt4q8YgCETQc8Fctnu0ZallIs",
  },

  openGraph: {
    title: "Maaz | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js. Building modern, responsive and high-performance web experiences.",
    url: "https://www.maazdev.me",
    siteName: "Maaz Portfolio",
    type: "article", 
    authors: ["Maaz"], 
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 600,
        alt: "Maaz Portfolio Banner",
      },
    ],
    locale: "en-US",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Maaz | Frontend Developer",
    card: "summary",
    images: ["/favicon.png"], // 👈 Yeh line add karein
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
	display: "swap",
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
      <body className="bg-black">
        {children}
        <SpeedInsights />
        <VercelAnalytics />
      </body>
    </html>
  );
}
