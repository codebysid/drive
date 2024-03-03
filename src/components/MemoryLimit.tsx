"use client"
import { Progress } from "@/components/ui/progress"
import useFileMemory from '@/hooks/useFileMemory'
import { Label } from "../components/ui/label"
import React from 'react'

const MemoryLimit = () => {
  const memory = useFileMemory()
  const memoryInPercentage = (memory / 200) * 100
  return (
    <div>
      {
        memoryInPercentage && <>
          <Label>Storage</Label>
          <Progress value={memoryInPercentage} />
        </>
      }
    </div>

  )
}

export default MemoryLimit
