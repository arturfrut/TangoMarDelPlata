'use client'

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'

export default function ProfessorClassDetail({ params }: any) {
  // TO DO
  //Diseñar ui
  //Diseñar casos
  // Crear carrousel fotos
  // Canal para videos
  // Crear tipado para eventDetail
  // Dar dinamismo al componente
  return (
    <>
      <h1>{params.id}</h1>
      <h1>{params.id}</h1>
      <h1>{params.id}</h1>
      <div style={{ padding: '2.5rem' }}>
        <Card>
          <CardHeader className='flex gap-3'>
            <Image
              alt='nextui logo'
              height={100}
              radius='sm'
              src='https://i.ibb.co/Q67BKKB/la-Rada-Tango-Img.jpg'
              width={100}
            />
            <div className='w-1/2 p-4'>
              <p className='text-md'>La Rada</p>
              <p className='text-md'> + En curso</p>
              <p className='text-small text-default-500'>Dirección: Chacabuco 1231</p>
              <p className='text-small text-default-500'>Profesores: Nacho y Anto</p>
              <p className='text-small text-default-500'>Horario: 19 a 12 hs</p>
            </div>
            <div className='w-1/2 p-4'>
              <p>/ICON/ Clase</p>
              <p>/ICON/ Práctica</p>
              <p>/ICON/ Evento especial</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className='w-1/2 p-4'>
              <h2>Horario Clase</h2>
              <p>Principiantes: 20 hs</p>
              <p>/ICON/ Evento especial</p>
            </div>
            <Divider />
            <div className='w-1/2 p-4'>
              <h2>Práctica</h2>
              <p>Principiantes: 20 hs</p>
              <p>/ICON/ Evento especial</p>
            </div>
            <Divider />
            <div className='w-1/2 p-4'>
              <h2>Evento especial</h2>
              <p>Principiantes: 20 hs</p>
              <p>/ICON/ Evento especial</p>
            </div>
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
