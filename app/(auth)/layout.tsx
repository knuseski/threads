import {ReactNode} from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {Inter} from "next/font/google";
import '../globals.css'

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}

const inter = Inter({subsets: ['latin']})

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <ClerkProvider>
            <html lang='en'>
            <body suppressHydrationWarning={true}
                  className={`${inter.className} bg-dark-1`}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    )
}

export default RootLayout;