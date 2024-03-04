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
const MemoryLimit = dynamic(() => import("./MemoryLimit"))
const AddFolder = dynamic(() => import("./AddFolder"))
const AddFile = dynamic(() => import("./AddFile"))
const Logo = dynamic(() => import("./Logo"))
const BackButton = dynamic(() => import("./BackButton"))
const SignOutButton = dynamic(() => import("./SignOutButton"))

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between pb-6 w-full pr-5'>
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
              <NavigationMenuLink asChild><MemoryLimit /></NavigationMenuLink>
              <NavigationMenuLink asChild><SignOutButton /></NavigationMenuLink>

            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='hidden lg:flex md:flex flex-row items-center justify-around w-full'>
        <div className="flex flex-row gap-4">
          <AddFolder />
          <AddFile />
          <MemoryLimit />
        </div>
        <div>
          <SignOutButton />
        </div>
      </div >
    </div>
  )
}

export default Navbar
