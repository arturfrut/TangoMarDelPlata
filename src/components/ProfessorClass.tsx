'use client'
import { Accordion, AccordionItem, User, Card } from '@nextui-org/react'
import Link from 'next/link'

export default function ProfessorClass() {
  return (
    <>
      <section>
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
      </section>
    </>
  )
}
