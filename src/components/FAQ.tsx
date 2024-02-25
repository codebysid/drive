import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
  {
    id: 1,
    question: "Is this a commercial application ?",
    answer: "NO, its a personal project of Siddhant Jain (Full Stack Developer)"
  },
  {
    id: 2,
    question: "Is this project a exact clone of Google Drive ?",
    answer: "NextDrive is a clone of Drive functionality wise. It has less storage because i have used free servcies as this is a personal project"
  },
  {
    id: 3,
    question: "What is the purpose of this personal project ?",
    answer: "NextDrive as a personal project works as a showcase/proof my skills as a Full Stack Developer."
  }
]

const FAQ = () => {
  return (
    <div>
      <span className='text-3xl font-bold text-secondary'>Popular FAQ's ↴</span>
      <Accordion type="single" collapsible className="w-full lg:text-2xl">
        {
          questions.map((q) => {
            return <AccordionItem value={String(q.id)}>
              <AccordionTrigger className='text-left'>{q.question}</AccordionTrigger>
              <AccordionContent className='lg:text-2xl'>{q.answer}</AccordionContent>
            </AccordionItem>
          })
        }
      </Accordion>
    </div>
  )
}

export default FAQ
