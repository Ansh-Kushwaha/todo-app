import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession, Session } from 'next-auth'
import { GET } from '@/api/auth/[...nextauth]/route'

import LoginScreen from '@/components/LoginScreen'
import SessionProvider from '@/components/SessionProvider'

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
            <div>
              {children}
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
