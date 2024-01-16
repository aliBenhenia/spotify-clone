import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Side_bar from '@/components/Side_bar';




const font = Figtree({ subsets: ['latin'] })
const description_spotify = `enjoy with our music`;
export const metadata: Metadata = {
  title: 'spotify clone ',
  description: description_spotify,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
         <Side_bar>
            {children}
         </Side_bar>
        </body>
    </html>
  )
}
