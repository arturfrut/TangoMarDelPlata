'use client'
import { generateDateArray } from '@/Utils/formatDatesArray'
import { Event } from '@/types/eventType'
import { Accordion, AccordionItem } from '@nextui-org/react'
import EventItem from './EventItem'
import FreeEventDay from './FreeEventDay'

export default function AccordionLessons({ weekEvents }: {weekEvents: Event[]}) {
  const accordionDates = generateDateArray(weekEvents)
  return (
    <section>
      <Accordion selectionMode='multiple' defaultExpandedKeys={['0']}>
        {accordionDates.map((date, i) => (
          <AccordionItem key={i} title={`${date.day} ${date.dayNumber}`}>
            {date.dayEvent.length > 0 ? (
              date.dayEvent.map((event, index) => <EventItem key={index} event={event} />)
            ) : (
              <FreeEventDay />
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
