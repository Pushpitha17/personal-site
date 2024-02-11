import { promises as fs } from 'fs'
import ReactMarkdown from 'react-markdown'
import './markdown.css'
import remarkGfm from 'remark-gfm'
import ImageCarousel from '@/components/Custom/ImageCarousel'
import PillButton from '@/components/Custom/PillButton'
import path from 'path'
import Container from '@/components/ui/Container'
import BreadCrumbs from '@/components/Custom/breadCrumbs'
interface Project {
  title: string
  name: string
  md: string
  tags: string[]
  imgs: string[]
}

interface ProjectData {
  [key: string]: Project
}

export default async function Page({
  params,
}: {
  params: { project: string }
}) {
  const { project } = params
  let markDownContent = ''
  let data: ProjectData = {}

  const filePath = path.join(process.cwd(), 'public', 'Data', 'data.json')
  const file = await fs.readFile(filePath, 'utf8')
  data = JSON.parse(file)

  const mdFilePath = path.join(
    process.cwd(),
    'public',
    'static',
    'Markdown',
    data[project].md
  )
  markDownContent = await fs.readFile(mdFilePath, 'utf8')

  let images = data[project].imgs.map((img: string) => {
    return {
      original: `/static/Images/${img}`,
      thumbnail: `/static/Images/${img}`,
    }
  })

  return (
    <Container>
      <div>
        <BreadCrumbs
          path={[
            { name: 'Projects', url: '/projects' },
            { name: data[project].title },
          ]}
        ></BreadCrumbs>
      </div>
      <main className=''>
        <h2 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white'>
          {data[project].title}
        </h2>
        <div className='flex flex-wrap mb-8'>
          {data[project].tags.map((pill: string) => (
            <PillButton key={pill} text={pill} />
          ))}
        </div>
        <div className='flex flex-col sm:flex-row-reverse'>
          <div className='flex justify-center my-5 flex-1'>
            <ImageCarousel images={images} />
          </div>
          <div className='markdown flex-1 mr-0 md:mr-5'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markDownContent}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </Container>
  )
}
