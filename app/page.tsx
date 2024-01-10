import Container from '@/components/ui/Container'

export default function Home() {
  return (
    <main className='py-10'>
      <Container>
        <div className='flex'>
          <div className='w-8/12'>
            <h2>
              <div className='flex items-center md:items-end  mb-4 md:pl-16'>
                <div className='animate-wave text-7xl'>👋</div>
                <p className='text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                  Hi, I&apos;m Pushpitha
                </p>
              </div>
            </h2>
            <div className='max-w-screen-md md:pl-24'>
              <p className='mt-8 text-lg font-normal leading-8'>
                Currently , I am a final year{' '}
                <strong>Materials science and Engineering Undergraduate</strong>{' '}
                at University of Moratuwa by Day and{' '}
                <strong>Javascript Developer</strong> at Night.👨🏾‍💻
              </p>
              <p className='mt-2 text-lg font-normal  leading-8'>
                Apart from that most of my time goes to keeping up with cricket
                and{' '}
                <a
                  href='https://www.dota2.com/home'
                  target='blank'
                  className='underline'
                >
                  Dota 2
                </a>{' '}
                games that are played around the world.
              </p>
            </div>
            <div className=' md:pl-24 py-10'>
              <button
                type='button'
                className=' bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                View Projects
              </button>
              <button
                type='button'
                className='bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
              >
                About Me
              </button>
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
