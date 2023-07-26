"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

type type = {
    children: React.ReactNode
}

const Provider = ({ children }: type) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider