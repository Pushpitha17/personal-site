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

  // useEffect(() => {
  //   console.log({ resolvedTheme })
  //   const el = document.getElementsByTagName('html')
  //   if (el) {
  //     if (resolvedTheme === 'dark') {
  //       el[0].classList.add("dark");
  //       console.log("this is dark theme")

  //     } else {
  //       el[0].classList.remove("dark");
  //     }
  //   }
  // }, [resolvedTheme, mounted])

  if (!mounted) return <Loader2 />

  if (resolvedTheme === 'dark') {
    return <Sun onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <Moon onClick={() => setTheme('dark')} />
  }
}

export default ThemeSwitch
