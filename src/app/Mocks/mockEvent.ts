const today = new Date()
const currentDay = today.getDay()
const daysUntilSaturday = 6 - currentDay + 1
const nextSaturday = new Date(today)
nextSaturday.setDate(today.getDate() + daysUntilSaturday)

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
      eventDescription: 'lorem ipsum dolor sit amet, consect',
    },
    {
      eventType: 'Práctica',
      // schedule: tipo date,
      schedule: '22:30 a 1:30',
      title: 'Práctica - Guiada por profesores',
      eventDescription: 'lorem ipsum dolor sit amet, consect'
    },
    {
      eventType: 'Práctica',
      // schedule: tipo date,
      schedule: '22:30 a 1:30',
      title: 'Bailan Micho y Tito',
      eventDescription: 'lorem ipsum dolor sit amet, consect',
      specialEvent: true
    },
    
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
    img: 'https://rlv.zcache.es/pegatina_cuadrada_tango_argentino_buenos_aires_fileteado_porteno-r8972e737e6d441f8801b6e8d52cf457a_0ugmc_8byvr_644.webp',
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
