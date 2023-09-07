"use client";
import { Quicksand } from "next/font/google";
import Navbar from "components/navbar";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import "styles/main.css";
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
            <body>
                <Navbar />
                {children}
                {/* <GoogleAnalytics measurementId='G-NMZYF8FWE8' /> */}

                <Script src='https://www.googletagmanager.com/gtag/js?id=G-LGHGRSL5J1'></Script>
                <Script>
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'G-LGHGRSL5J1');`}
                </Script>
            </body>
        </html>
    );
}
