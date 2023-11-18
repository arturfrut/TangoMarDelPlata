const today = new Date()
const currentDay = today.getDay()
const daysUntilSaturday = 6 - currentDay + 1
const nextSaturday = new Date(today)
nextSaturday.setDate(today.getDate() + daysUntilSaturday)
console.log(nextSaturday)

export const mockEvents = [
  {
    img: 'https://i.ibb.co/Q67BKKB/la-Rada-Tango-Img.jpg',
    date: nextSaturday,
    // schedule: tipo date,
    schedule: 'Mar Jue 19 a 22 hs',
    address: 'Chacabuco 1231',
    eventName: 'La rada Tango',
    organizers: [
      { alias: 'Nacho', id: 1 },
      { alias: 'Anto', id: 2 }
    ],
    eventType: ['Clase', 'Práctica'],
    eventId: 1
  }
]

export const eventDetail = {
  eventId: 1,
  img: 'https://i.ibb.co/Q67BKKB/la-Rada-Tango-Img.jpg',
  date: nextSaturday,
  schedule: 'Mar Jue 19 a 22 hs ',
  address: 'Chacabuco 1231',
  eventName: 'La rada Tango',
  organizers: [
    { alias: 'Nacho', id: 1 },
    { alias: 'Anto', id: 2 }
  ],
  eventType: ['Clase', 'Práctica'],
  eventDetail: [
    {
      eventType: 'Clase',
      // schedule: tipo date,
      schedule: '19 a 22:30',
      title: 'Clase especial de sacadas',
      eventDescription: 'lorem ipsum dolor sit amet, consect'
    },
    {
      eventType: 'Práctica',
      // schedule: tipo date,
      schedule: '22:30 a 1:30',
      title: 'Práctica - Guiada por profesores',
      eventDescription: 'lorem ipsum dolor sit amet, consect'
    }
  ],
  eventImgs: ['https://media.tacdn.com/media/attractions-splice-spp-674x446/09/92/a8/81.jpg']
}

export const mockCarrousel = [
  {
    img: 'https://i.ibb.co/Q67BKKB/la-Rada-Tango-Img.jpg',
    date: nextSaturday,
    // schedule: tipo date,
    schedule: 'Mar Jue 19 a 22 hs',
    address: 'Chacabuco 1231',
    eventName: 'La rada Tango',
    organizers: [
      { alias: 'Nacho', id: 1 },
      { alias: 'Anto', id: 2 }
    ],
    eventType: ['Clase', 'Práctica'],
    eventId: 1
  },
  {
    img: 'https://i.ibb.co/Q67BKKB/la-Rada-Tango-Img.jpg',
    date: nextSaturday,
    // schedule: tipo date,
    schedule: 'Mier vie 10 a 12 hs',
    address: 'Rivadavia 2202',
    eventName: 'La salsa Tango',
    organizers: [
      { alias: 'Nacho', id: 1 },
      { alias: 'Anto', id: 2 }
    ],
    eventType: ['Clase', 'Práctica'],
    eventId: 2
  }
]
