"use client";
import { Quicksand } from "next/font/google";
import Navbar from "components/navbar";
import "styles/main.css";
import GoogleAnalytics from "components/analytics";
import CookieBanner from "components/cookie";
import Script from "next/script";

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
            {/* <GoogleAnalytics GA_MEASUREMENT_ID='G-CFR5ZG8VQG' /> */}
            <body>
                <Navbar />
                {children}
                <Script
                    id='G-NMZYF8FWE8'
                    src='https://www.googletagmanager.com/gtag/js?id=G-NMZYF8FWE8'
                    strategy='afterInteractive'
                />
                <Script id='google-analytics'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'G-NMZYF8FWE8');
                        `}
                </Script>
            </body>
        </html>
    );
}
