import { X } from "lucide-react";

export default function ErrorRegister({ closeModal }: {  closeModal: () => void }) {
      return (
            <section className=" absolute top-0 left-0 flex justify-center items-center w-full h-dvh bg-backgroundRegister/50 ">
                  <section className=" flex flex-col items-center mx-4 py-3 px-10 rounded-xl bg-backgroundRegister border border-error text-whiteLight ">
                        <section className=" flex justify-center items-center w-24 h-24 bg-error/20 rounded-full ">
                              <X color="#CF2F13" />
                        </section>
                        <section className=" flex flex-col gap-2 py-6  md:text-base text-center ">
                              <h2 className=" text " > Error de registro </h2>
                              <p className=" text-xs">No hemos podido registrar tu cuenta</p>
                              <p className=" text-xs max-w-90 "> Ocurrió un problema al procesar tu registro. Revisa los detalles del error y vuelve a intentarlo.</p>
                        </section>
                        <button
                              onClick={closeModal}
                              className="py-2 px-4 bg-error text-white rounded-md"
                        >
                              Cerrar
                        </button>
                  </section>
            </section>
      )
}


/* 



Ocurrió un problema al procesar tu registro. Revisa los detalles del error y vuelve a intentarlo.



*/