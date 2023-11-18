type Organizers = {
  alias: string
  id: number
}

interface EventDetails {
  eventType: string
  schedule: string
  title: string
  eventDescription: string
}



export interface Event {
  eventId: number
  img: string
  date: Date
  schedule: string
  address: string
  eventName: string
  organizers: Organizers[]
  eventType: string[]
  isCarrousel?: Boolean
}

export interface EventwithDetail extends Event {
  eventDetail?: EventDetails[]
  eventImgs: string[]
}
