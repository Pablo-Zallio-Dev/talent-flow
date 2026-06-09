import { CircleAlert, UserLock } from "lucide-react";

export default function ErrorLogin({ closeModal }: { closeModal: () => void }){
      return(
            <section className=" absolute top-0 left-0 z-500 flex justify-center items-center w-full h-screen bg-backgroundRegister/50      ">
                  <section className=" flex flex-col items-center py-8 px-4 mx-6 border border-error/80 text-whiteLight bg-backgroundRegister ">
                  <section className=" flex justify-center items-center w-18 h-18 mb-8 rounded-full bg-error/20 ">
                        <UserLock size={48} color="#CF2F13" />
                  </section>
                        <h1 className=" text-error text-sm ">Error de acceso</h1>
                        <section className=" py-4 ">
                        <p className=" text-base text-center ">No pudimos iniciar sesión</p>
                        <p className=" text-xs md:text-sm text-center ">Verifica que tu email y contraseña sean correctos e inténtalo de nuevo.</p>
                        </section>
                        <section className=" flex items-center gap-4 py-4 px-10 rounded-md border border-error bg-errorLight ">
                              <CircleAlert color="#CF2F13" />
                              <p className="text-xs text-error ">Email o contraseña incorrectos. Por favor revisa tus datos.</p>
                        </section>
                        <button className=" w-full py-2 mt-3 rounded-sm text-sm bg-error " onClick={closeModal}>Intentar de nuevo</button>      
                  </section>
            </section>
      )
}