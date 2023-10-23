import { mockEvents } from '@/app/Mocks/mockEvent'
import AccordionLessons from './accordionLessons'
import EventCarrousel from './eventCarrousel'

export default function ClasesYMilongas() {
const weekEvents = mockEvents

  return (
    <main>
      <h1> Escuelas tango</h1>
      <h1> Escuelas tango</h1>
      <EventCarrousel />
      <AccordionLessons weekEvents={mockEvents}/>
    </main>
  )
}
