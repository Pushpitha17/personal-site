'use client'
import React, { useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import Link from 'next/link'

function DrawerNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div ref={btnRef} onClick={onOpen}>
        <Menu className='ml-3' />
      </div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <ul className='space-y-2 text-lg font-semibold'>
              <li>
                <Link href='/' className='' onClick={onClose}>
                  <div className='my-6'> Home </div>
                </Link>
              </li>
              <li>
                <Link href='/projects' className='pb-4' onClick={onClose}>
                  <div className='my-6'> Projects </div>
                </Link>
              </li>
              <li>
                <Link href='/about' className='pb-4' onClick={onClose}>
                  <div className='my-6'> About Me </div>
                </Link>
              </li>
            </ul>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerNavigation
