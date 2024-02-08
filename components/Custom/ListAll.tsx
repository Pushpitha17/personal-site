'use client'
import React from 'react'
import CardItem from './CardItem'
import Link from 'next/link'

function ListAll(props: { data: any[] }) {
  const stack = ['React', 'Material Ui', 'Strapi', 'Google Cloud', 'firebase']

  console.log({ 'professional proetcs': props.data })

  return (
    <div>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {props.data.map((project, index) => (
            <div key={index}>
              <CardItem project={project} more={`/projects/${project.route}`} />
            </div>
          ))}
          {/* <CardItem />
            <CardItem />
            <CardItem /> */}
        </div>
      </div>
    </div>
  )
}

export default ListAll
