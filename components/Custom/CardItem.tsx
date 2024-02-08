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
import { Tooltip } from '@chakra-ui/react'

export default function CardItem(props: { project: any; more?: string }) {
  const { name, description, link, tags, publicRepo, image } = props.project

  return (
    <Card className='lg:max-w-sm w-full border-double shadow-lg transition-transform duration-300 transform hover:shadow-xl hover:translate-y-[-6px] bg-background border-2'>
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
            <div className='flex flex-row justify-between align-center pt-3 leading-8'>
              <p>{name}</p>
              {link ? (
                <Tooltip label='External Link'>
                  <Link href={link} target='blank'>
                    <ExternalLink size={20} />
                  </Link>
                </Tooltip>
              ) : (
                <Tooltip label='Link Unavailable'>
                  <ExternalLink
                    size={20}
                    className='text-gray-300 dark:text-gray-600'
                  />
                </Tooltip>
              )}
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
          <div className='w-full flex justify-between my-2'>
            <div className='pl-2'>
              {publicRepo ? (
                <Tooltip label='Public Repo'>
                  <Github className='text-black dark:text-white' />
                </Tooltip>
              ) : (
                <Tooltip label='Private Repo'>
                  <Github className='text-gray-300 dark:text-gray-600' />
                </Tooltip>
              )}
            </div>
            <div>
              {props.more ? (
                <Link href={props.more}>
                  <div className='flex items-center'>
                    <span className='text-sm'>See more </span>
                    <ChevronRight />
                  </div>
                </Link>
              ) : (
                <div className='flex items-center text-gray-300 dark:text-gray-600'>
                  <span className='text-sm'>See more </span>
                  <ChevronRight />
                </div>
              )}
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
