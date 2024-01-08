'use client'
import React from 'react'
import { colorMappings, textColor } from '../../public/Data/colormappings'

function PillButton(props: { text: string }) {
  const { text } = props

  console.log({ text })

  return (
    <button
      className={`mr-1.5 my-1.5 py-0.5 rounded-full text-sm hover:drop-shadow-md duration-300 relative overflow-hidden group`}
      style={{
        backgroundColor: colorMappings[text as keyof typeof colorMappings],
        color: textColor[text as keyof typeof textColor],
      }}
    >
      <span className='block bg-black bg-opacity-10 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'></span>
      <span className='px-2'>{text}</span>
    </button>
  )
}

export default PillButton
