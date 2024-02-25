import Link from 'next/link'
import React from 'react'

const Logo: React.FC<string> = ({ size }) => {
  return (
    <Link href="/">
      <h1 className={`text-2xl ${size} font-bold lg:text-4xl`}><span className='text-secondary'>Next</span><span>Drive</span></h1>
    </Link>
  )
}

export default Logo
