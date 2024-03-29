import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/theme-provider'
import "slick-carousel/slick/slick.css"; // Fix: Correct import path
import "slick-carousel/slick/slick-theme.css";
// import { getCurrentUser } from '@/actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-darkBg text-gray-700`}> <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  )
}
