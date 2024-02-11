'use client'

import { useEffect } from 'react'
import { usePathname } from "next/navigation"

export default function ScrollUp() {

  const path = usePathname()
  console.log("Scroll to Top")

  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [path])

  return null
}