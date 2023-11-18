import { mockEvents } from '@/app/Mocks/mockEvent'
import AccordionLessons from './accordionLessons'
import EventCarrousel from './eventCarrousel'

export default function ClasesYMilongas() {
const weekEvents = mockEvents

  return (
    <main>
      <EventCarrousel />
      <AccordionLessons weekEvents={mockEvents}/>
    </main>
  )
}
