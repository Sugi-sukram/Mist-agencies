"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter()
    // router.push('/app/dashboard')
  return (
    <div>page</div>
  )
}

export default page