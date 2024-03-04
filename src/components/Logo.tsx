import Link from 'next/link'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <h1 className={`text-xl font-bold md:text-3xl lg:text-3xl`}><span className='text-primary'>Next</span><span>Drive</span></h1>
    </Link>
  )
}

export default Logo
