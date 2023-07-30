import './globals.css'
import type { Metadata } from 'next'
import Header from "@/components/header";
import {roboto} from "@/app/fonts";

export const metadata: Metadata = {
  title: 'Firdausng',
  description: 'Welcome to Firdausng blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} container mx-auto bg-white dark:bg-gray-900 dark:text-white`}>
        <Header />
        <main className="">
          {children}
        </main>
        <footer>

        </footer>

      </body>
    </html>
  )
}
