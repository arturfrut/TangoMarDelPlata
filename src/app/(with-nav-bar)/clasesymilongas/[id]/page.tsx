'use client'

import { eventDetail } from '@/app/Mocks/mockEvent'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from '@nextui-org/react'
import { Fragment } from 'react'

export default function EventDetail() {
  const event = eventDetail

  // TO DO
  //Diseñar ui
  //Diseñar casos
  // Crear carrousel fotos
  // Canal para videos
  return (
    <>
      <div style={{ padding: '2.5rem' }}>
        <Card>
          <CardHeader className='flex gap-3'>
            <Image alt='nextui logo' height={100} radius='sm' src={event.img} width={100} />
            <div className='w-1/2 p-4'>
              <p className='text-md'>{event.eventName}</p>
              <p className='text-md'> + En curso</p>
              <p className='text-small text-default-500'>{event.address}</p>
              <p className='text-small text-default-500'>
                Profesores:{' '}
                {event.organizers.map((organizer, i) => (
                  <span>
                    {organizer.alias} {event.organizers.length < i && 'y '}
                  </span>
                ))}
              </p>

              <p className='text-small text-default-500'>Horario: 19 a 12 hs</p>
            </div>
            {event.eventType.map((type, i) => (
              <Button radius='sm' size='sm' className='my-1' key={i + 40}>
                {type}
              </Button>
            ))}
          </CardHeader>
          <Divider />
          <CardBody>
            {event.eventDetail?.map((eventDet, i) => (
              <Fragment key={i}>
                <div className='w-1/2 p-4'>
                  <h2>Horario Clase</h2>
                  <p>Principiantes: 20 hs</p>
                  <p>/ICON/ Evento especial</p>
                </div>
                
                { // NO FUNCIONA BIEN
                event.eventDetail.length > 1 && event.eventDetail.length !== i && <Divider />}
              </Fragment>
            ))}
          </CardBody>

          <Divider />
          <CardFooter>
            <Link showAnchorIcon href='/clasesymilongas/2'>
              Ver más info!
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
