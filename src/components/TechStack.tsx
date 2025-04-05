import { UploadCloud } from 'lucide-react'
import { TbBrandNextjs } from "react-icons/tb"
import { BiLogoMongodb } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import { FaShieldAlt } from "react-icons/fa"
import { FaGripLines } from "react-icons/fa"
import React from 'react'
import TechStackCard from './TechStackCard'

const techStack = [
  {
    id: 1,
    name: "Next.js",
    icon: <TbBrandNextjs className='w-7 h-7' />,
    url: "https://nextjs.org/"
  },
  {
    id: 2,
    name: "ShadCN UI & Aceternity",
    url: "https://ui.shadcn.com/",
    icon: <FaGripLines className='w-7 h-7' />
  },
  {
    id: 3,
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    icon: <SiTailwindcss className='w-7 h-7' />
  },
  {
    id: 4,
    name: "Cloudinary",
    url: "https://cloudinary.com/",
    icon: <UploadCloud className='w-7 h-7' />
  },
  {
    id: 5,
    name: "NextAuth",
    icon: <FaShieldAlt className='w-7 h-7' />,
    url: "https://next-auth.js.org/"
  },
  {
    id: 6,
    name: "MongoDB",
    url: "https://www.mongodb.com/docs/atlas/",
    icon: <BiLogoMongodb className='w-7 h-7' />
  }
]

const TechStack = () => {
  return (
    <div className='flex flex-col flex-wrap gap-3 px-10 slide-up'>
      <h1 className='text-3xl font-bold text-secondary'>Our Tech Stack ↴</h1>
      <div className='flex flex-col gap-3 md:flex-row lg:flex-row flex-wrap'>
        {
          techStack.map(({ name, url, id, icon }) => {
            return <TechStackCard key={id} icon={icon} name={name} url={url} />
          })
        }
      </div>
    </div>
  )
}

export default TechStack
