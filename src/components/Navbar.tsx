"use client"
import React from 'react'
import SignOutButton from './SignOutButton'
import AddFolder from './AddFolder'
import AddFile from './AddFile'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from 'lucide-react'
import Logo from './Logo'
import BackButton from './BackButton'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between pb-6'>
      <div className='flex flex-row items-center'>
        <BackButton />
        <Logo />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='lg:hidden'><Menu /></NavigationMenuTrigger>
            <NavigationMenuContent className='w-fit'>
              <NavigationMenuLink asChild><AddFolder /></NavigationMenuLink>
              <NavigationMenuLink asChild><AddFile /></NavigationMenuLink>
              <NavigationMenuLink asChild><SignOutButton /></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className=' lg:block hidden lg:flex lg:flex-row lg:items-center lg:gap-4'>
        <span>
          <AddFolder />
        </span>
        <span>
          <AddFile />
        </span>
        <SignOutButton />
      </div >
    </div>
  )
}

export default Navbar
