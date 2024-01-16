import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UUID-GEN',
  description: 'UUID Generator Website',
}

export default function RootLayout({ children }: { children: React.ReactNode })
{
  return (
    <html lang="en">
      <body className={cn(inter.className, 'h-dvh w-dvw')}>
        {children}
      </body>
    </html>
  )
}
