'use client'
import { Accordion, AccordionItem, Card, CardBody, User } from '@nextui-org/react'
import Link from 'next/link'

export default function ItemsGroup() {
  return (
    <Card>
      <CardBody className='flex flex-row items-center gap-3'>
        <Accordion selectionMode='multiple' defaultExpandedKeys={['0']}>
          <AccordionItem title='Escuelas de tango'>
            <Link href='/escuelasdetango/2'>
              <Card>
                <User
                  name='Nacho Iglesias'
                  description='Product Designer'
                  avatarProps={{
                    src: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
                  }}
                />
              </Card>
            </Link>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  )
}


