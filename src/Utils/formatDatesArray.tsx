import { Event } from '@/types/eventType';

export const generateDateArray = (weekEvents: Event[]) => {
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  const dateArray: Array<{ day: string; dayNumber: number; date: Date }> = []

  const currentDate = new Date()
  for (let i = 0; i < 7; i++) {
    const day = daysOfWeek[currentDate.getDay()]
    const dayNumber = currentDate.getDate()
    dateArray.push({ day, dayNumber, date: new Date(currentDate) })
    currentDate.setDate(dayNumber + 1)
  }

  const dateArrayWithEvents = dateArray.map(dateObj => {
    const matchingEvents = weekEvents.filter(event => {
      return (
        event.date.getDate() === dateObj.date.getDate() &&
        event.date.getMonth() === dateObj.date.getMonth() &&
        event.date.getFullYear() === dateObj.date.getFullYear()
      )
    })

    return { ...dateObj, dayEvent: matchingEvents }
  })

  return dateArrayWithEvents
}
