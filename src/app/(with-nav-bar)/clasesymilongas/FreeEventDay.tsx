import { Card, CardBody, Image } from '@nextui-org/react';

export default function FreeEventDay() {
  return (
    <Card>
      <CardBody className='flex flex-row items-center gap-3'>
        <Image
          alt='nextui logo'
          height={100}
          radius='sm'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvboFcgiIgfkVkbHJu5rWGdffSaEsCZRbXcbULPRhzD_xEkVWT_DN3TyKUz123_2XTOCc&usqp=CAU'
          width={100}
        />
        <p className='text-md'>Lo sentimos, pero no hay eventos en esta fecha</p>
      </CardBody>
    </Card>
  );
}