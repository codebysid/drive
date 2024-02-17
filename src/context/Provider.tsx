"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"


type TProvider = {
  children: React.ReactNode,
}

const Provider: React.FC<TProvider> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider
