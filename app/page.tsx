import Container from '@/components/ui/Container'
import { Instagram, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='py-10 '>
      <Container>
        <div className='flex'>
          <div className='md:w-8/12'>
            <h2>
              <div className='flex items-center md:items-end  mb-4 md:pl-16'>
                <div className='animate-wave text-7xl'>👋</div>
                <p className='text-4xl pl-5 md:pl-2 font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                  Hi, I&apos;m Pushpitha
                </p>
                {/* <p className='text-4xl pl-5 md:pl-8 font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                  Hey ! I&apos;m Pushpitha 😀
                </p> */}
              </div>
            </h2>
            <div className='max-w-screen-md md:pl-24'>
              <p className='mt-8 text-lg font-normal leading-8'>
                Currently , I am a final year{' '}
                <strong className='text-pink'>
                  Materials science and Engineering Undergraduate
                </strong>{' '}
                at University of Moratuwa, by Day and{' '}
                <strong className='text-pink'>A Programmer</strong> by
                Night.👨🏾‍💻
              </p>
              <p className='mt-2 text-lg font-normal  leading-8'>
                Apart from that most of my time goes to keeping up with cricket
                matches and{' '}
                <a
                  href='https://www.dota2.com/home'
                  target='blank'
                  className='underline'
                >
                  Dota 2
                </a>{' '}
                games that are being played around the world.
              </p>
            </div>
            <div className=' md:pl-24 pt-10'>
              <Link href='/about'>
                <button
                  type='button'
                  className='bg-background border border-pink text-pink hover:bg-pink hover:text-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-transparent
                 dark:text-lightPink dark:border-lightPink dark:hover:bg-pink dark:hover:text-white  dark:focus:ring-gray-700'
                >
                  About Me
                </button>
              </Link>
              <Link href='/projects' className='ml-2'>
                <button
                  type='button'
                  className=' bg-pink hover:bg-white text-white hover:text-pink border border-pink focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink dark:border-lightPink
                dark:hover:bg-background dark:hover:text-lightPink  focus:outline-none dark:focus:ring-blue-800'
                >
                  View Projects
                </button>
              </Link>
            </div>
            <div className='flex md:py-0 md:pl-24 mt-5'>
              <a
                href='https://www.instagram.com/pushpe_17/'
                className='mr-3'
                target='blank'
              >
                <Instagram color='#fda4af' size={32} strokeWidth={2} />
              </a>
              <a
                href='https://www.linkedin.com/in/pushpitha-geeganage-b98280171/'
                className='mr-3'
                target='blank'
              >
                <Linkedin color='#fda4af' size={32} strokeWidth={2} />
              </a>
              <a
                href='https://github.com/Pushpitha17'
                className='mr-3'
                target='blank'
              >
                <Github color='#fda4af' size={32} strokeWidth={2} />
              </a>
            </div>
          </div>
          <div className='w-4/12 hidden md:block'>
            <div className='w-8/12 mx-auto mt-20'>
              <img src='/static/Images/landing.png' alt='' className='' />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
