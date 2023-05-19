import React from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import SignIn from '@/components/SignIn'
import Copyright from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Bai_Jamjuree({
  subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'
})

export const metadata = {
  title: 'Spacetime',
  description: 'Uma capsula do tempo contruida com React, Next, Tailwind e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuth = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-950 text-gray-100`}>
      <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        {/* Blur */}
        <div id="blur"  className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-full translate-x-1/2 bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div id="stripes" className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

        {isAuth ? <Profile /> : <SignIn />}

        <Hero />

        <Copyright />
      </div>
  
      {/* rigth */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {children}
      </div>
    </main>
      </body>
    </html>
  )
}
