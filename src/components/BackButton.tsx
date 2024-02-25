"use client"
import React from 'react'
import { Button } from "./ui/button"
import { ArrowLeft } from 'lucide-react'
import useParentFolder from '@/hooks/useParentFolder'

const BackButton = () => {
  const { updateParentFolder } = useParentFolder()
  const { parentFolder } = useParentFolder()
  async function handleBack() {
    updateParentFolder(null)
  }

  return (
    <Button variant="ghost" size="sm" className='rounded w-min' onClick={handleBack}>
      <ArrowLeft />
    </Button>
  )
}

export default BackButton
