import ListAll from '@/components/Custom/ListAll'
import Container from '@/components/ui/Container'
import BreadCrumbs from '@/components/Custom/breadCrumbs'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import AccordianlItem from '@/components/Custom/AccordianlItem'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default async function Projects() {
  return (
    <main className='py-4'>
      <Container>
        <div>
          <BreadCrumbs path={[{ name: 'About', url: '/about' }]}></BreadCrumbs>
        </div>
        <p className='mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl'>
          About Me
        </p>
        <div className='mb-4'>
          <p className='text-md text-gray-700 dark:text-gray-300 text-left'>
            I am a final year Materials Science and Enginering undergraduate at
            University of Moratuwa.
          </p>
          <p className='text-md text-gray-700 dark:text-gray-300 text-left'>
            I study about properties, applications and manufacuring of all types
            of materials. I specifically focus on aspects of polymer materials
            and Entrepreneurship.
          </p>
          <p className='text-md text-gray-700 dark:text-gray-300 text-left mt-3'>
            I am also a self taught programmer. I have experience in full stack web
            development and some computational programming.
          </p>
        </div>
        <div>
          <a
            href='/static/Pushpitha Geeganage-SE.pdf'
            download='Pushpitha Geeganage Resume'
          >
            <div className='underline-offset-8 underline decoration-solid decoration-pink decoration-3 pb-5 text-gray-700 dark:text-gray-300'>
              Download My Developer Resume
            </div>
          </a>
        </div>
        <div className='mt-5 my-7 mb-12 md:mb-7'>
          <div className='text-2xl font-semibold mb-3'>Connect</div>
          <div className='flex text-pink'>
            <a
              href='https://www.instagram.com/pushpe_17/'
              className='mr-3'
              target='blank'
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100008712275462'
              className='mr-3'
              target='blank'
            >
              <Facebook size={24} strokeWidth={1.5} />
            </a>
            <a
              href='https://twitter.com/pushpitha_g'
              className='mr-3'
              target='blank'
            >
              <Twitter size={24} strokeWidth={1.5} />
            </a>
            <a
              href='https://www.linkedin.com/in/pushpitha-geeganage-b98280171/'
              className='mr-3'
              target='blank'
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className='my-7 mb-12 md:mb-7'>
          <div className='text-2xl font-semibold mb-3'>More</div>
          <div className='text-gray-700 dark:text-gray-300'>
            <Accordion allowToggle>
              <AccordionItem border='none'>
                <h2>
                  <AccordionButton padding={0}>
                    <span className='text-lg font-semibold'>Technologies</span>
                    <AccordionIcon className='ml-5' />
                  </AccordionButton>
                </h2>
                <div className='py-2'>
                  <hr></hr>
                </div>
                <AccordionPanel pb={4}>
                  <AccordianlItem
                    element={{
                      title: 'Languages',
                      item: [{ itemName: 'JavaScript, Typescript, Python' }],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Frontend',
                      item: [
                        {
                          itemName: 'React , NextJs, Redux, Tailwind , CSS, Material UI',
                        },
                      ],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Backend',
                      item: [{ itemName: 'NodeJs, ExpressJS, Flask, Sql and Nosql Databases , ORMs' }],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Services',
                      item: [
                        { itemName: ' Google Cloud , Firebase , Edge functions' },
                      ],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Tools',
                      item: [
                        { itemName: 'Git, Jupyter Notebooks, Docker, Figma , Postman' },
                      ],
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem border='none'>
                <h2>
                  <AccordionButton padding={0}>
                    <span className='text-lg font-semibold'>Devices</span>
                    <AccordionIcon className='ml-5' />
                  </AccordionButton>
                </h2>
                <div className='py-2'>
                  <hr></hr>
                </div>
                <AccordionPanel pb={4}>
                  <AccordianlItem
                    element={{
                      title: 'Daily Driver',
                      item: [{ itemName: 'Google Pixel 7' }],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'PC',
                      item: [
                        {
                          itemName: 'Msi Delta 15 Laptop',
                          link: 'https://www.msi.com/Laptop/Delta-15-A5EX/Gallery',
                        },
                      ],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Notes',
                      item: [{ itemName: 'Samsung Tab S9 FE' }],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Screen',
                      item: [
                        { itemName: 'DELL S2421HN 24″ IPS' },
                      ],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Peripherals',
                      item: [
                        { itemName: 'HyperX Alloy Origins Core Keyboard' },
                        { itemName: 'Razer Viper Mini Mouse' },
                      ],
                    }}
                  />
                  <AccordianlItem
                    element={{
                      title: 'Audio',
                      item: [
                        { itemName: 'Sennheiser HD450BT ANC Headaset' },
                        { itemName: 'Samsung Galaxy Buds 2' },
                      ],
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
            <AccordionItem border='none'>
              <h2>
                <AccordionButton padding={0}>
                  <span className='text-lg font-semibold'>Cricket</span>
                  <AccordionIcon className='ml-5' />
                </AccordionButton>
              </h2>
              <div className='py-2'>
                <hr></hr>
              </div>
              <AccordionPanel pb={4}>
                <AccordianlItem
                  element={{
                    title: 'Current Players I follow',
                    item: [
                      {
                        itemName: 'Anrich Nortje',
                        link: 'https://www.youtube.com/shorts/A3ntJC_KD_Q',
                      },
                      { itemName: 'Dushmantha Chameera' },
                      { itemName: 'Kane Williamson' },
                      {
                        itemName: 'Jake Fraser-Mcgurk',
                        link: 'https://www.cricket.com.au/videos/3875091/every-six-fraser-mcgurk-arrives-as-big-bash-unearths-new-star',
                      },
                    ],
                  }}
                />
                <AccordianlItem
                  element={{
                    title: 'All time Favorites',
                    item: [
                      {
                        itemName: 'AB De Villiers',
                        link: 'https://www.youtube.com/watch?v=wg63nWpnN6Q',
                      },
                      { itemName: 'Mahela Jayawardene' },
                      { itemName: 'Ricky Ponting' },
                    ],
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </div>
        </div>
      </Container>
    </main>
  )
}
