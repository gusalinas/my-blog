import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata: Metadata = {
  title: 'Ivns Blog',
  description: 'Created by Me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-slate-800">
        <Navbar/>
        <MyProfilePic></MyProfilePic>
        {children}
      </body>
    </html>
  )
}
