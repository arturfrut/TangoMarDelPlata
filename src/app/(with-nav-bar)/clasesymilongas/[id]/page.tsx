'use client'

import { eventDetail } from '@/app/Mocks/mockEvent'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image
} from '@nextui-org/react'
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
          <CardHeader className='flex gap-3 justify-between px-8'>
            <div className='flex gap-3 items-center'>
              <Image
                alt='nextui logo'
                height={100}
                radius='sm'
                src={event.img}
                width={100}
              />
              <div className='p-4'>
                <p className='text-md'>{event.eventName}</p>
                {
                  // VALIDAR SI ESTA EN FECHA ACTUAL O NO
                }
                <p className='text-md'>
                  <span className='text-md animate-pulse text-red-600'>
                    {'\u2022'}
                  </span>{' '}
                  En curso
                </p>
                <p className='text-small text-default-500'>{event.address}</p>
                <p className='text-small text-default-500'>
                  Profesores:{' '}
                  {event.organizers.map((organizer, i) => (
                    <span key={i}>
                      {organizer.alias} {event.organizers.length < i && 'y '}
                    </span>
                  ))}
                </p>

                <p className='text-small text-default-500'>
                  Horario: 19 a 12 hs
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              {event.eventType.map((type, i) => (
                <Button radius='sm' size='sm' className='my-1' key={i}>
                  {type}
                </Button>
              ))}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            {event.eventDetail?.map((eventDet, i) => (
              <Fragment key={i}>
                <div className='w-1/2 p-4'>
                  {eventDet.specialEvent && <p>&#x2605; Evento especial</p>}
                  <h2>{eventDet.title ?? eventDet.eventType}</h2>
                  {eventDet.eventDescription && (
                    <h2>{eventDet.eventDescription}</h2>
                  )}
                  <p>Horario: {eventDet.schedule ?? 'No especificado'}</p>
                </div>
                {event.eventDetail.length > 1 &&
                  event.eventDetail.length !== i + 1 && <Divider />}
              </Fragment>
            ))}
          </CardBody>
          {event.eventImgs && (
            <>
              <Divider />
              {
                // TODO: Hacer que al seleccionar se agrande imagen, se haga lista siempre de la misma altura
                // PENSAR CARRUSEL O SIMILAR PARA MOSTRAR FOTOS, VALIDAR DESCRIPCIÓN,
              }

              <CardBody className='flex flex-row justify-center'>
                {event.eventImgs.map((imgSrc, i) => (
                  <Card>
                    <CardBody>
                      <Image key={i} src={imgSrc} />
                    </CardBody>
                    <CardFooter className='text-small'>
                      <p className='text-default-500'>{'Descripción:'}</p>
                    </CardFooter>
                  </Card>
                ))}
              </CardBody>
            </>
          )}
        </Card>
      </div>
    </>
  )
}
