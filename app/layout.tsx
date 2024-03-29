import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession, Session } from 'next-auth'
import { GET } from './api/auth/[...nextauth]/route'

import LoginScreen from '@/components/LoginScreen'
import SessionProvider from '@/components/SessionProvider'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo app project with Next JS 13',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session: Session | null = await getServerSession(GET);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <LoginScreen />
          ): (
            <div className='flex flex-col h-[100vh] dark:bg-[#1B1B1B]'>
              <NavBar />
              <div className='flex h-[90vh]'>
                {/* <SideBar /> */}
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
