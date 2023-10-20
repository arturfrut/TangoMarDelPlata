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
            className='border-2 border-blue-500 text-blue-500 focus:outline-none hover:bg-blue-500 hover:text-white hover:border-blue-500 focus:ring-4 focus:ring-blue-500 font-normal rounded-xl text-sm px-5 py-2 mr-2 mb-2'          >
            {' '}
            {label}
          </button>
        </Link>
      ))}
    </section>
  )
}
