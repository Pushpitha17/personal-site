import { promises as fs } from 'fs'
import ReactMarkdown from 'react-markdown'
import './markdown.css'
import remarkGfm from 'remark-gfm'
import ImageCarousel from '@/components/Custom/ImageCarousel'
import PillButton from '@/components/Custom/PillButton'

export default async function IndividualProjectPage({
  params,
}: {
  params: { project: string }
}) {
  const { project } = params

  console.log(project)

  const file = await fs.readFile(
    process.cwd() + '/public/Data/data.json',
    'utf8'
  )
  const data = JSON.parse(file)
  console.log(data)

  const markDownContent = await fs.readFile(
    process.cwd() + data[project].md,
    'utf8'
  )

  // let images = data[project].imgs.map((img: string) => {
  //   return `/data/Images/${img}`
  // })
  let images = data[project].imgs.map((img: string) => {
    return {
      original: `/data/Images/${img}`,
      thumbnail: `/data/Images/${img}`,
    }
  })

  return (
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
        <div className='markdown flex-1 mr-5 sm:mr-0'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markDownContent}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const files = fs.readdirSync(path.join(process.cwd(), 'public/Data/Markdown')) // Adjust the directory accordingly

//   const paths = files.map((file) => ({
//     params: { slug: file.replace(/\.md$/, '') },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }
