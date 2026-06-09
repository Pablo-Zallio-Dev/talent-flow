import { Check } from "lucide-react";
import ButtonAccentSmall from "../common/ButtonAccentSmall";




export default function SuccessRegister({ name, surname, reset }: { name: string, surname: string, reset: ()=> void }) {





      return (
            <>
                  <section className=" absolute top-0 left-0 flex justify-center items-center w-full h-dvh bg-backgroundRegister/50 ">
                        <section className=" flex flex-col items-center mx-4 py-3 px-10 rounded-xl bg-backgroundRegister border border-accentForm text-whiteLight ">
                              <section className=" flex justify-center items-center w-24 h-24 bg-accentForm/20 rounded-full ">
                                    <Check size={36} color="#12b8b8" />
                              </section>
                              <section className=" flex flex-col gap-2 py-6 text-xs md:text-base text-center ">
                                    <h2 className=" " > Registro exitoso </h2>
                                    <h1 className=" text-accentForm text-2xl font-bold ">¡{name} Bienvenid@ a TalentFlow!</h1>
                                    <p className="">{name} {surname} Tu cuenta ha sido creada exitosamente.</p>
                              </section>
                                    <ButtonAccentSmall text={"Ir al dashboard"} size={"small"} href="/dashboard" pruebaFuncion={reset} />
                        </section>
                  </section>
            </>
      )
}