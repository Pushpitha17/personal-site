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
        <div className='mb-10'>
          <p className='text-lg text-gray-700 dark:text-gray-300 text-justify'>
            I am a final year Materials Science and Enginering undergraduate at
            university of Moratuwa.
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-300 text-justify'>
            I study about properties, applications and manufacuring of all types
            of materials. I specifically focus on aspects of polymer materials
            and Entrepreneurship.
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-300 text-justify mt-3'>
            I am also a self taught programmer. I have experience full stack web
            development and some computational programming.
          </p>
        </div>
        <div>
          <div className="underline-offset-4 underline decoration-solid">Download My Developer Resume</div>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem border='none'>
              <h2>
                <AccordionButton padding={0}>
                  <span className='md:text-xl font-semibold'>
                    Current Arsenal
                  </span>
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
                        itemName: 'Msi Delta 15',
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
                      { itemName: 'Sennheiser HD450BT' },
                      { itemName: 'Samsung Galaxy Buds 2' },
                    ],
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem border='none'>
              <h2>
                <AccordionButton padding={0}>
                  <span className='md:text-xl font-semibold'>Cricket</span>
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
                      { itemName: 'Anrich Nortje', link:'https://www.youtube.com/shorts/A3ntJC_KD_Q' },
                      { itemName: 'Dushmantha Chameera' },
                      { itemName: 'Kane Williamson' },
                      { itemName: 'Jake Fraser-Mcgurk' , link: 'https://www.cricket.com.au/videos/3875091/every-six-fraser-mcgurk-arrives-as-big-bash-unearths-new-star'},
                    ],
                  }}
                />
                <AccordianlItem
                  element={{
                    title: 'All time Favorites',
                    item: [
                      { itemName: 'AB De Villiers', link: 'https://www.youtube.com/watch?v=wg63nWpnN6Q' },
                      { itemName: 'Mahela Jayawardene' },
                      { itemName: 'Ricky Ponting' },
                    ],
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </main>
  )
}
