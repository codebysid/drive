import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6"
import Logo from './Logo'

const socials = [
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
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/SiddhantJainnn",
    id: 2,
    icon: <FaLinkedin />
  },
]

const Footer = () => {
  return (
    <div className='flex flex-row justify-around w-full items-center text-center text-sm lg:text-base md:text-base'>
      <Logo />
      <div>
        <span>Built by Siddhant Jain</span>
        <div className=' flex flow-row justify-between items-center'>
          <span>Contact:</span>
          {
            socials.map((social) => {
              return <Link key={social.id} href={social.url} target='_blank' title={social.name} className=' hover:scale-150 hover:transition-all hover:duration-200'>
                <span className='hover:text-primary'>{social.icon}</span>
              </Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
