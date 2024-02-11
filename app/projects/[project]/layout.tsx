import BreadCrumbs from '@/components/Custom/breadCrumbs'
import Container from '@/components/ui/Container'
import { promises as fs } from 'fs'
import path from 'path'
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { project: string }
}) {
  const { project } = params
  let data: ProjectData = {}

  const filePath = path.join(process.cwd(), 'public', 'Data', 'data.json')
  const file = await fs.readFile(filePath, 'utf8')
  data = JSON.parse(file)

  const projectName = data[project].title

  return (
    <Container>
      <div>
        <BreadCrumbs
          path={[{ name: 'Projects', url: '/projects' }, { name: projectName }]}
        ></BreadCrumbs>
      </div>
      {children}
    </Container>
  )
}
