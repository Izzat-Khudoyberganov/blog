"use client";
import { Quicksand } from "next/font/google";
import Navbar from "components/navbar";
import "styles/main.css";
import GoogleAnalytics from "components/analytics";

const inter = Quicksand({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.className}>
            <GoogleAnalytics GA_MEASUREMENT_ID='G-CFR5ZG8VQG' />
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
