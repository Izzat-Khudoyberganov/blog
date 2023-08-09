"use client";
import { Quicksand } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "@/style/main.css";

const inter = Quicksand({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://khudoyberganov.uz"),
    title: {
        default: "Khudoyberganov Izzat",
        template: "%s | Khudoyberganov Izzat",
    },
    description: "Developer, writer, and creator.",
    openGraph: {
        title: "Khudoyberganov Izzat",
        description: "Developer, writer, and creator.",
        url: "https://khudoyberganov.uz",
        siteName: "Khudoyberganov Izzat",
        locale: "uz-UZ",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
