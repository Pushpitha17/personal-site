'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

function ThemeSwitch() {

  const DARK = 'dark'
  const LIGHT = 'light'

  const [mode, setMode] = useState('')

  useLayoutEffect(() => {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;

    if (prefersDark) {
      setMode(DARK)
    } else {
      setMode(LIGHT)
    }
  }, [setMode])

  const handleSwitch = () => {
    if (mode === DARK) {
      setMode(LIGHT)
    } else {
      setMode(DARK)
    }
  }

  useEffect(() => {
    const el = document.getElementsByTagName('html')

    if (el) {
      if (mode === DARK) {
        el[0].setAttribute('data-theme', 'dark');
        el[0].classList.add('dark')
      } else {
        el[0].setAttribute('data-theme', 'light');
        el[0].classList.remove('dark')
      }
    }
  }, [mode])

  return (
    <div onClick={handleSwitch}>
      {mode === DARK ? (<Moon />) : <Sun />}
    </div>
  )
}

export default ThemeSwitch