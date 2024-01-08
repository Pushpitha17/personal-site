import BreadCrumbs from '@/components/Custom/breadCrumbs'
import Container from '@/components/ui/Container'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      <div>
        <BreadCrumbs path={['Projects', "Project Athena"]}></BreadCrumbs>
      </div>
      {children}
    </Container>
  )
}
