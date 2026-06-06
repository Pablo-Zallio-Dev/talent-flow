
export type NavFormProps = {
      btnActive: boolean,
      setBtnActive: (value: boolean) => void,
}

export default function NavForm( {btnActive, setBtnActive}: NavFormProps ){

      

      return(
            <section className=" flex justify-between gap-2 p-1 bg-whiteLight text-sm  rounded-md ">
                  <button className={` w-1/2 py-1  rounded-md ${ btnActive ? 'bg-backgroundRegister text-whiteLight':' text-textDark ' } `} onClick={ () => setBtnActive(true) }>Iniciar Sesiòn</button>
                  <button className={` w-1/2 py-1  rounded-md ${ btnActive ? ' text-textDark ' :'bg-backgroundRegister text-whiteLight' } `} onClick={ () => setBtnActive(false) }>Registrarse</button>
            </section>
      )
}







