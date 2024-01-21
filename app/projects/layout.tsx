import BreadCrumbs from '@/components/Custom/breadCrumbs'
import Container from '@/components/ui/Container'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
