import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6"

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/SiddhantJainnn",
    id: 2,
    icon: <FaLinkedin />
  },
  {
    name: "Twitter (X)",
    url: "https://twitter.com/codebysid",
    id: 3,
    icon: <FaSquareXTwitter />
  },
  {
    name: "Github",
    url: "https://github.com/codebysid",
    id: 1,
    icon: <FaGithub />
  },
]

const DevFooter = () => {
  return (
    <div className='flex flex-col items-center pt-10 text-center mt-auto text-sm lg:text-base'>
      <span>Made with 💜 by Siddhant Jain</span>
      <div className='flex flex-row items-center gap-8'>
        <span className='text-primary'>&#10100;</span>
        {
          socials.map((social) => {
            return <Link key={social.id} href={social.url} target='_blank'>
              <span className='hover:text-primary p-2'>{social.icon}</span>
            </Link>
          })
        }
        <span className='text-primary'>&#10101;</span>
      </div>
    </div>
  )
}

export default DevFooter
