'use client'
import React from 'react'
import Link from 'next/link'

type AccordianItem = {
  itemName: string
  link?: string
}

type AccordianElement = {
  title: string
  item: AccordianItem[]
}

function AccordianlItem(props: { element: AccordianElement }) {
  return (
    <div className='grid grid-cols-[15ch_5ch_auto] pb-3'>
      <div className=''>{props.element.title}</div>
      <div className='pr-3'>:</div>
      <div>
        {props.element.item.map((item, index) => (
          <div>
            {item.link ? (
              <Link href={item.link} target="blank">
                <p className='underline-offset-4 underline decoration-solid pb-2'>
                  {item.itemName}
                </p>
              </Link>
            ) : (
              <p className='pb-2'>{item.itemName}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccordianlItem
