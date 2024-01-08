'use client'
import React from 'react'

function BreadCrumbs(props: { path: string[] }) {
  const { path } = props

  return (
    <nav className='py-5'>
      <ol className='inline-flex items-center rtl:space-x-reverse'>
        {path.map((pathItem, index) => (
          <div className='flex items-center' key={index}>
            <a
              href='#'
              className='text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
            >
              {pathItem}
            </a>
            {index !== path.length - 1 && (
              <svg
                className='rtl:rotate-180 w-3 h-3 text-gray-400 mx-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            )}
          </div>
        ))}
      </ol>
    </nav>
  )
}

export default BreadCrumbs
