'use client'
import React from 'react'
import Container from '../ui/Container'
import CardItem from './CardItem'
import PillButton from './PillButton'
import Link from 'next/link'

function ListAll() {
  const stack = ['React', 'Material Ui', 'Strapi', 'Google Cloud', 'firebase']

  return (
    <div>
      <Container>
        <p className='mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-primary'>
          Projects
        </p>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Link href='/projects/athena'>
              <CardItem pills={stack} />
            </Link>
            {/* <CardItem />
            <CardItem />
            <CardItem /> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ListAll
