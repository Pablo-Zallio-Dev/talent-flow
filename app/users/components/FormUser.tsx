'use client'
import { useState } from "react";
import NavForm from "./NavForm";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

export default function FormUser() {

      const [btnActive, setBtnActive] = useState(true)

      return (
            <section className=" w-full ">
                  {/* Boton de navegacion de la pagina de registro e inicio de sesion */}
                  <NavForm btnActive={btnActive} setBtnActive={setBtnActive} />

                  <section className=" my-3 ">
                        {
                              btnActive ? <FormLogin /> : <FormRegister />
                        }
                  </section>

                  
            </section>
      )
}