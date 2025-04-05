"use client"
import { Progress } from "@/components/ui/progress"
import useFileMemory from '@/hooks/useFileMemory'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { BiMemoryCard } from "react-icons/bi";
import { Button } from "../components/ui/button"
import { totalMemoryForUser } from "@/utils/Memory"

const MemoryLimit = () => {
  const memory = useFileMemory()
  const memoryInPercentage = (memory / 200) * 100
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className=" text-md cursor-pointer" title="Memory status">
          <BiMemoryCard className=" size-5 cursor-pointer" />
          Memory Status
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex items-center">
        <DrawerHeader className="flex flex-col md:gap-14 lg:gap-14 gap-4 justify-center">
          <DrawerTitle className="md:text-2xl lg:text-2xl text-xl">~<span className="text-primary">
            {`${totalMemoryForUser - memory} mB`}
          </span> available out of {`${totalMemoryForUser} mB`}</DrawerTitle>
          {
            memoryInPercentage && <div>
              <Progress value={memoryInPercentage} className="w-full" />
              <div className="flex flex-row justify-between font-bold items-center">
                <span>{memoryInPercentage}%</span>
                <span>100%</span>
              </div>
            </div>
          }
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>

    </Drawer>

  )
}

export default MemoryLimit
