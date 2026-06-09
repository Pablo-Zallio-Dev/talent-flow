'use client'

import { supabase } from "@/app/infraestructure/supabase/supabaseClient";
import ErrorForm from "@/app/presentation/components/common/ErrorForm";
import ErrorLogin from "@/app/presentation/components/errorLogin/ErrorLogin";
import BtnSessionGoogle from "@/app/presentation/components/ui/BtnSessionGoogle";
import { LoginSchema } from "@/app/schemas/LoginRecruiterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import z from "zod";


export default function FormLogin() {
      const router = useRouter();
      const [showPass, setShowPass] = useState({ pass: false, confirm: false });
      const [errorLogin, setErrorLogin] = useState(false);

      const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
            resolver: zodResolver(LoginSchema),
            mode: "onChange"
      })

      const onLogin = async (data: z.infer<typeof LoginSchema>) => {
            console.log('Comenzando')
            try {
                  setErrorLogin(false);
                  const { data: authData, error } = await supabase.auth.signInWithPassword({
                        email: data.email,
                        password: data.password,
                  });

                  if (error) {
                        console.error("Error de Supabase:", error); // <-- Mira qué dice aquí en la consola
                        throw error;
                  }
                  console.log("Sesión iniciada:", authData);
                  // Si todo sale bien, redirigimos al dashboard
                  router.push('/dashboard');
            } catch {
                  setErrorLogin(true);
            }
      };

      console.log('cargando')
      console.log("Estado actual:", { 
    isValid: isValid, 
    errors: errors,
    isSubmitting: isSubmitting 
});
      return (
            <section className=" py-3 text-textLight">
                  <form onSubmit={handleSubmit(onLogin)} className=" flex flex-col gap-4 ">
                        <div className="relative flex flex-col gap-2 ">
                              <label htmlFor="email" className=" font-bold text-xs uppercase ">
                                    email*
                              </label>
                              <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    id="email"
                                    className=" p-2 text-xs border border-borderBtn md:border-borderBtn/50 rounded-md focus:outline-none focus:border-accentForm "
                              />
                              <section
                                    className={` absolute -bottom-8 md:-bottom-9 left-0 z-500 w-full focus:opacity-0 ${errors.email ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}
                              >
                                    {errors.email && <ErrorForm error={errors.email.message} />}

                              </section>
                        </div>
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="password" className=" font-bold text-xs uppercase ">
                                    contraseña*
                              </label>
                              <section className=" flex justify-between border border-borderBtn md:border-borderBtn/50 rounded-md has-focus:border has-focus:border-accentForm   ">
                                    <input
                                          {...register("password", { required: true })}
                                          type={`${showPass.pass ? "text" : "password"}`}
                                          id="password"
                                          className=" w-full p-2 text-xs outline-none group  "
                                    />
                                    <button
                                          type="button"
                                          className=" mr-8 "
                                          onClick={() => setShowPass({ ...showPass, pass: !showPass.pass })}
                                    >
                                          {!showPass.pass ? (
                                                <Eye size={16} color="#b8b8b8" />
                                          ) : (
                                                <EyeOff size={16} color="#b8b8b8" />
                                          )}
                                    </button>
                              </section>
                              <section
                                    className={` absolute -bottom-8 md:-bottom-9 left-0 z-500 w-full focus:opacity-0 ${errors.password ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}
                              >
                                    {errors.password && <ErrorForm error={errors.password.message} />}
                              </section>
                        </div>
                        <button
                              type="button"
                              onClick={(e) => {
                                    e.preventDefault();
                                    console.log("¡Clic detectado!");
                                    handleSubmit(onLogin)();
                              }}
                              disabled={!isValid || isSubmitting}
                              className="py-2 mt-3 text-textDark bg-accentForm rounded-md disabled:text-textDark/20 transition-all disabled:hover:translate-y-0 hover:-translate-y-0.5 disabled:hover:scale-100 hover:scale-100  duration-100 "
                        >
                              Iniciar sesion
                        </button>
                  </form>

                  <section className=" flex flex-col gap-6 pt-6  ">
                        <BtnSessionGoogle />
                  </section>
                  {
                        errorLogin && createPortal(
                              <ErrorLogin closeModal={() => setErrorLogin(false)} />,
                              document.body
                        )
                  }
            </section>
      )
}

