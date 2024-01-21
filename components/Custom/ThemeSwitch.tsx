'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'
import { Loader2 } from 'lucide-react'
import { useTheme } from 'next-themes'

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const el = document.getElementsByTagName('html')
    if (el) {
      if (resolvedTheme === 'dark') {
        el[0].setAttribute('data-theme', 'dark')
      } else {
        el[0].setAttribute('data-theme', 'light')
      }
    }
  }, [resolvedTheme])

  if (!mounted) return <Loader2 />

  if (resolvedTheme === 'dark') {
    return <Sun onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <Moon onClick={() => setTheme('dark')} />
  }
}

export default ThemeSwitch
