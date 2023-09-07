"use client";
import { Quicksand } from "next/font/google";
import Navbar from "components/navbar";
import GoogleAnalytics from "components/analytics";
import "styles/main.css";

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
            <GoogleAnalytics
                GA_MEASUREMENT_ID={`${process.env.NEXT_GOOGLE_ANALYTICS_ID}`}
            />
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
