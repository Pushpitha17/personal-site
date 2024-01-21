import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PillButton from './PillButton'
import { ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Github } from 'lucide-react'

export default function CardItem(props: { project: any }) {
  const { name, description, link, tags, publicRepo, image } = props.project

  return (
    <Card className='lg:max-w-sm w-full border shadow-lg transition-transform duration-300 transform hover:shadow-xl hover:translate-y-[-6px]'>
      <div className='flex flex-col h-full'>
        <div className='w-full h-48 relative'>
          <img
            src={image}
            alt='card-image'
            className='w-full h-full object-cover'
          />
        </div>
        <CardHeader>
          <CardTitle>
            <div className='flex flex-row justify-between align-center pt-3'>
              <p>{name}</p>
              <Link href={link} target='blank'>
                <ExternalLink size={20} />
              </Link>
            </div>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap'>
            {tags.map((tag: any) => (
              <PillButton key={tag} text={tag} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className='w-full flex justify-between'>
            <Link href={'/'} className='pl-2'>
              <Github />
            </Link>
            <Link href='/'>
              <ChevronRight />
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
