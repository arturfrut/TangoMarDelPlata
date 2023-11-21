'use client'

import { Event } from '@/types/eventType'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link
} from '@nextui-org/react'
//TO DO
// Si no hay imagen cargar fondo negro con iniciales
// Pensar campos
// Agregar animación a estado de la milonga
// Link a profesores
// Agregar tooltip detalle horarios
// Iconos eventos
// Función para saber a q hora es el evento

export default function EventItem({ event }: { event: Event }) {
  return (
    <Card>
      <CardHeader className='flex gap-3 justify-between'>
        <div className='flex gap-3 items-center '>
          <Image
            alt='nextui logo'
            height={100}
            radius='sm'
            src={event.img}
            width={100}
          />
          <div className=' p-4'>
            <p className='text-md'>{event.eventName}</p>
            {
              // AGREGAR VALIDACIÓN PARA SABER CUANTO FALTA
              false ? (
                <p className='text-md'>
                  <span className='text-md animate-pulse text-green-600'>
                    {'\u2022'}
                  </span>{' '}
                  En curso
                </p>
              ) : (
                <p className='text-md'>
                  <span className='text-md animate-pulse text-red-600'>
                    {'\u2022'}
                  </span>{' '}
                  Próxima clase en XXX horas
                </p>
              )
            }
            <p className='text-small text-default-500'>{event.address}</p>
            <p className='text-small text-default-500'>
              Organizan:{' '}
              {event.organizers.map((organizer, i) => (
                <span>
                  {organizer.alias}{' '}
                  {event.organizers.length > 1 &&
                    i < event.organizers.length - 2 &&
                    ', '}
                  {event.organizers.length > 1 &&
                    i === event.organizers.length - 2 &&
                    ' y '}
                </span>
              ))}
            </p>
            <p className='text-small text-default-500'>{event.schedule}</p>
          </div>
        </div>
        <div
          className='w-1/8 p-2
          flex flex-col bg-neutral-800 rounded-lg'
        >
          {event.eventType.map((type, i) => (
            <Button radius='sm' size='sm' className='my-1' key={i + 40}>
              {type}
            </Button>
          ))}
        </div>
      </CardHeader>
      <Divider />

      <CardFooter>
        <Link showAnchorIcon href='/clasesymilongas/2'>
          Ver más info!
        </Link>
      </CardFooter>
    </Card>
  )
}
