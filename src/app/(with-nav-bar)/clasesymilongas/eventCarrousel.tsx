'use client'

import { mockCarrousel } from '@/app/Mocks/mockEvent'
import { Button, ButtonGroup } from '@nextui-org/react'

import { useEffect, useState } from 'react'
import EventItem from './EventItem'

const EventCarrousel = () => {
  //TO DO
  //Crear carrousel
  //Diseñar UI para eventos especiales
  //COLOR CARD : #7d6e24
  const [page, setPage] = useState(0)
  const carrouselEvents = mockCarrousel
  const buttons = Array(mockCarrousel.length).fill(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prevPage =>
        prevPage === carrouselEvents.length - 1 ? 0 : prevPage + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [carrouselEvents.length])

  return (
    <section>
      <EventItem event={{ ...carrouselEvents[page], isCarrousel: true }} />

      {carrouselEvents.length > 1 && (
        <ButtonGroup>
          <Button
            color={'primary'}
            onClick={() =>
              setPage(prevPage =>
                prevPage === 0 ? carrouselEvents.length - 1 : prevPage - 1
              )
            }
          >
            {'<'}
          </Button>

          {buttons.map((_, i) => (
            <Button
              color={page === i ? 'primary' : 'secondary'}
              key={i}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            color={'primary'}
            onClick={() =>
              setPage(prevPage =>
                prevPage === carrouselEvents.length - 1 ? 0 : prevPage + 1
              )
            }
          >
            {'>'}
          </Button>
        </ButtonGroup>
      )}
    </section>
  )
}

export default EventCarrousel
