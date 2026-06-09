
import Image from 'next/image'
import iconGoogle from '../../../../public/icon/icon_google.svg'

export default function BtnSessionGoogle(){
      return(
            <button className=' flex text-xs justify-center items-center gap-3 py-2 px-10 border border-borderBtn rounded-lg font-semibold '> <Image src={iconGoogle} alt='Boton para iniciar sesion con Google' /> Iniciar con GOOGLE </button>
      )
}