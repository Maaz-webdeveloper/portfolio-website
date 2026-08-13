import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	// ✅ Naya custom domain base URL set kar diya
	metadataBase: new URL("https://maazdev.me"),

	title: {
		default: "Maaz | Frontend Developer",
		template: "%s | Maaz",
	},
	description:
		"Maaz is a passionate Frontend Developer specializing in React and Next.js, building clean, modern and scalable web applications.",
	authors: [{ name: "Maaz" }],

	// ✅ Canonical link naye domain ke mutabiq automatic theek rahega
	alternates: {
		canonical: "/",
	},

	openGraph: {
		title: "Maaz | Frontend Developer",
		description:
			"Frontend Developer specializing in React and Next.js. Building modern, responsive and high-performance web experiences.",
		url: "https://maazdev.me", // ✅ URL update kar diya
		siteName: "Maaz Portfolio",
		images: [
			{
				url: "/favicon.png", // 👈 /og.png mita kar /favicon.png likhein
				width: 500, // 👈 1200 mita kar 500 likhein
				height: 500, // 👈 630 mita kar 500 likhein
				alt: "Maaz Portfolio Banner",
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
        <meta
          name="google-site-verification"
          content="hpOHhtWOaYECGdjorKGt4q8YgCETQc8Fctnu0ZallIs"
        />
      </head>
      <body className="bg-black">
        {children}
        <SpeedInsights />
        <VercelAnalytics />
      </body>
    </html>
  );
}
