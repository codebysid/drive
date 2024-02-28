"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'
import React from 'react'
const AddFolder = dynamic(() => import("./AddFolder"))
const AddFile = dynamic(() => import("./AddFile"))
const Logo = dynamic(() => import("./Logo"))
const BackButton = dynamic(() => import("./BackButton"))
const SignOutButton = dynamic(() => import("./SignOutButton"))

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
            <NavigationMenuTrigger className='lg:hidden md:hidden'><Menu /></NavigationMenuTrigger>
            <NavigationMenuContent className='w-fit'>
              <NavigationMenuLink asChild><AddFolder /></NavigationMenuLink>
              <NavigationMenuLink asChild><AddFile /></NavigationMenuLink>
              <NavigationMenuLink asChild><SignOutButton /></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className=' lg:block hidden lg:flex lg:flex-row lg:items-center lg:gap-4 md:block md:flex md:flex-row md:items-center md:gap-4'>
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
