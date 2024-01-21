import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/ui/Container'
import ThemeSwitch from '@/components/Custom/ThemeSwitch'
import DrawerNavigation from '@/components/Custom/DrawerNavigation'
import { ChakraProvider } from '@chakra-ui/react'
import { Instagram, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pushpitha Geeganage',
  description: 'Personal Website of Pushpitha Geeganage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <ChakraProvider>
            <div className="flex flex-col min-h-screen  bg-[url('/static/Images/dot-grid.png')] dark:bg-none  dark:text-white text-gray-900">
              <div className='py-5	'>
                <Container>
                  <div className='flex w-100 justify-between	'>
                    <Link href='/'>
                      <p className='text-lg font-extrabold leading-none tracking-tight title-text'>
                        Pushpitha Geeganage
                      </p>
                    </Link>
                    <div className='flex'>
                      <ThemeSwitch />
                      <div>
                        <DrawerNavigation />
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <hr className='h-0.5 border-0 bg-gray-300 dark:bg-border'></hr>
              <div className='flex-grow'>{children}</div>
              <div>
                <Container>
                  <hr></hr>
                  <div className='md:flex justify-between py-5 ml-3 dark:text-white text-gray-900'>
                    <div> © Pushpitha Geeganage, 2024</div>
                    <div className='flex py-3 md:py-0'>
                      <a
                        href='https://github.com/Pushpitha17'
                        className='mr-3'
                        target='blank'
                      >
                        <Github />
                      </a>
                      <a
                        href='https://www.linkedin.com/in/pushpitha-geeganage-b98280171/'
                        className='mr-3'
                        target='blank'
                      >
                        <Linkedin />
                      </a>
                      <a
                        href='https://www.instagram.com/pushpe_17/'
                        className='mr-3'
                        target='blank'
                      >
                        <Instagram />
                      </a>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </ChakraProvider>
        </Providers>
      </body>
    </html>
  )
}
