import ListAll from '@/components/Custom/ListAll'
import Container from '@/components/ui/Container'
import BreadCrumbs from '@/components/Custom/breadCrumbs'
import projects from '@/public/Data/projects.js'

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
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            I am a final year materials science enginering undergraduate at
            university of moratuwa. There , My focus is on manufacturing of
            polymer products.
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            I am also a self taught programmer. I have experience full stack web
            development and some computational programming.
          </p>
        </div>
      </Container>
    </main>
  )
}
