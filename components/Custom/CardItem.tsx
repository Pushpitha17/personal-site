import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import PillButton from './PillButton'
import { ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import sampleImg from '@/public/static/Images/athena/1.jpg'

export default function CardItem(props: { pills: string[] }) {
  return (
    <Card className='lg:max-w-xs w-full border shadow-lg transition-transform duration-300 transform hover:shadow-xl hover:translate-y-[-6px]'>
      <div className='flex flex-col h-full'>
        <div className='w-full h-48 relative'>
          <Image
            src={sampleImg}
            alt='card-image'
            layout='fill'
          />
        </div>
        <CardHeader>
          <CardTitle>
            <div className='flex flex-row justify-between align-center pt-3'>
              <p>Project Athena</p>
              <Link href='/'>
                <ExternalLink size={20} />
              </Link>
            </div>
          </CardTitle>
          <CardDescription>A Content distrubtion platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap'>
            {props.pills.map((pill) => (
              <PillButton key={pill} text={pill} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className='w-full flex justify-end'>
            <Link href='/'>
              <ChevronRight />
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
