import SideBar from './SideBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AppDash',
  description: 'Made by Subodh Khanal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex">
        <SideBar></SideBar>
        {children}
      </div>
      </body>
    </html>
  )
}
