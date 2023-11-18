import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  // TO DO
  // Tomar valor de ruta para saber cual esta activa y cambiar color (desde props)
  // transformar en un map
  // Buscar imagen logo
  const menuItems = [
    {
      link: '/clasesymilongas',
      label: 'Clases y Milongas'
    },
    {
      link: '/escuelasdetango',
      label: 'Escuelas y clases particulares'
    },
    {
      link: 'escuelasdetango',
      label: 'Escuelas y clases particulares'
    }
  ]

  return (
    <nav className=' w-full z-20 top-0 left-0 border-b border-gray-200 bg-black mb-6'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src='https://flowbite.com/docs/images/logo.svg'
            width={10}
            height={10}
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Home </span>
        </Link>
        <div className='flex md:order-2'></div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='bg-black flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   '>
            {menuItems.map(({ link, label }) => (
              <li key={label}>
                <Link
                  href={link}
                  className='block py-2 pl-3 pr-4 text-white bg-black rounded  md:p-0 '
                  aria-current='page'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
