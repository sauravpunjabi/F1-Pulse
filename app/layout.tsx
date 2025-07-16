import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "F1Pulse",
    description: "Formula 1 insight hub",
}

export default function RootLayout({ children } : {children : React.ReactNode}) {
    return(
        <html lang = "en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}