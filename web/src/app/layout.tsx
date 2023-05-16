import React from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

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
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-950 text-gray-100`}>{children}</body>
    </html>
  )
}
