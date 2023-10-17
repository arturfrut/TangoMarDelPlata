'use client'
import { generateDateArray } from '@/Utils/formatDatesArray'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function AppAccordion() {
  const accordionDates = generateDateArray()
  return (
    <Accordion selectionMode='multiple'>
      {accordionDates.map((date,i)=>(
        
      <AccordionItem key={i} title={`${date.day} ${date.dayNumber}`}>
        <h1>asdas</h1>
      </AccordionItem>
      ))}
    </Accordion>
  )
}
