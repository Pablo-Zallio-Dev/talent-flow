import Link from "next/link"

export type ButtonSessionProps = {
      text: string,
      state: boolean,
      changeState: () => void,
}

export default function ButtonSession( {text, state, changeState}: ButtonSessionProps ){


      return(
            <Link href={""} className={` text-xs border py-2 px-5 rounded-lg ${ state ?'' :'' }  `} onClick={ changeState }  >
                  {text}
            </Link>
      )
}