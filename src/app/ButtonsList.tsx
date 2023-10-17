import Link from 'next/link'

export default function ButtonsList() {

  // TO DO : 
  // ESTILAR BOTONES, CREAR BOTON GENERICO

  const mainBtns = [
    {
      label: 'VER CLASES Y MILONGAS',
      route: '/clasesymilongas'
    },
    {
      label: 'ESCUELAS DE TANGO Y CLASES PARTICULARES',
      route: '/escuelasdetango'
    },
    {
      label: 'SOBRE NOSOTROS / QUIERO COLABORAR',
      route: '/sobrenosotros'
    }
  ]

  return (
    <section className='flex flex-col justify-center items-center'>
      {mainBtns.map(({ label, route }) => (
        <Link href={route} key={route} className={'my-2'}>
          <button
            type='button'
            className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
          >
            {' '}
            {label}
          </button>
        </Link>
      ))}
    </section>
  )
}
