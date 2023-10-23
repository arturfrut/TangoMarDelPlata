import Link from 'next/link'
import NavBar from './navBar'


export default function WithNavBar({ children }: { children: React.ReactNode }) {
  // TO DO:
  // AGREGAR PADDING PARA QUE NO SE TOQUE CON NAV BAR
  return (
      <div>
        <NavBar />
        
       {children}
      </div>
  )
}
