"use client"
import React from 'react'
import { Button } from "./ui/button"
import { ArrowLeft } from 'lucide-react'
import useParentFolder from '@/hooks/useParentFolder'

const BackButton = () => {
  const value = useParentFolder()
  async function handleBack() {
    value?.updateParentFolder(null)
  }

  return (
    <Button variant="ghost" size="xsm" className='rounded w-min' onClick={handleBack}>
      <ArrowLeft />
    </Button>
  )
}

export default BackButton
