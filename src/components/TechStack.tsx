import { ArrowUpRight, UploadCloud } from 'lucide-react'
import { TbBrandNextjs } from "react-icons/tb"
import { BiLogoMongodb } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import { FaShieldAlt } from "react-icons/fa"
import { FaGripLines } from "react-icons/fa"
import React from 'react'
import Link from 'next/link'

const techStack = [
  {
    name: "Next.js 14",
    icon: <TbBrandNextjs className='iconSize' />,
    url: "https://nextjs.org/"
  },
  {
    name: "ShadCN UI",
    url: "https://ui.shadcn.com/",
    icon: <FaGripLines className='iconSize' />
  },
  {
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    icon: <SiTailwindcss className='iconSize' />
  },
  {
    name: "Cloudinary",
    url: "https://cloudinary.com/",
    icon: <UploadCloud className='iconSize' />
  },
  {
    name: "NextAuth",
    icon: <FaShieldAlt className='iconSize' />,
    url: "https://next-auth.js.org/"
  }, {
    name: "MongoDB",
    url: "https://www.mongodb.com/docs/atlas/",
    icon: <BiLogoMongodb className='iconSize' />
  }
]

const TechStack = () => {
  return (
    <div className='flex flex-col flex-wrap gap-3'>
      <h1 className='text-3xl font-bold text-secondary'>Our Tech Stack ↴</h1>
      <div className='flex flex-col gap-3 lg:flex-row flex-wrap'>
        {
          techStack.map((tech, key) => {
            return <Link key={key} target='_blank' href={tech.url} className='border-2 border-transparent hover:border hover:border-primary rounded-full'><div className='rounded-full p-4 flex flex-row items-center gap-2 flex-1 py-2 bg-secondary lg:w-[47vw]'>
              <div className={`bg-secondary w-min p-2 rounded-full ${tech.name === "ShadCN UI" && "-rotate-45"}`}>{tech.icon}</div>
              <p className='font-bold text-xl flex flex-row justify-between w-full items-center'>{tech.name}<ArrowUpRight className='text-primary' /></p>
            </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TechStack
