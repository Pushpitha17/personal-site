import ListAll from '@/components/Custom/ListAll'
import Container from '@/components/ui/Container'
import BreadCrumbs from '@/components/Custom/breadCrumbs'
import projects from '@/public/Data/projects.js'

export default async function Projects() {
  const professionalProjects = projects.professional
  const personalProjects = projects.personal
  const freeeLanceProjects = projects.freelance

  return (
    <main className='py-4'>
      <Container>
        <div>
          <BreadCrumbs
            path={[{ name: 'Projects', url: '/projects' }]}
          ></BreadCrumbs>
        </div>
        <p className='mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl'>
          Projects
        </p>
        <div className='mb-10'>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            This page showcases some of the software projects I&apos;ve been
            involved in over the past 2-3 years
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            I have curated a list of diverse projects that demonstrate my
            experience as a software developer.
          </p>
        </div>
        <div className='mb-10'>
          <p className='mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl'>
            Professional Projects
          </p>
          <div className=' mb-8 text-lg text-gray-700 dark:text-gray-300'>
            <p className=''>
              I contributed to these projects in my 2 years time as a part-time
              Junior Software Developer at{' '}
              <a
                href='https://www.frontiergroup.info/'
                className='underline'
                target='blank'
              >
                Frontier Research.
              </a>
            </p>
          </div>
          <ListAll data={professionalProjects} />
        </div>
        <div className='mb-10'>
          <p className='mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl'>
            Personal Projects
          </p>
          <ListAll data={personalProjects} />
        </div>
        <div className='mb-10'>
          <p className='mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl'>
            Freelance Projects
          </p>
          <ListAll data={freeeLanceProjects} />
        </div>
      </Container>
    </main>
  )
}
