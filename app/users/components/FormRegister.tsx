"use client";
import { useForm } from "react-hook-form"; // Importante: 'react-hook-form', no solo 'hookform'
import { zodResolver } from "@hookform/resolvers/zod"; // Debe llevar el @ al inicio
import { LoginSchema } from "../../schemas/RegisterRecruiterSchema"; // Tu ruta local
import ErrorForm from "@/app/presentation/components/common/ErrorForm";
import { onSubmitRegister } from "../utilities/onSubmitRegister.function";
import z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import SuccessRegister from "@/app/presentation/components/succesRegister/SuccesRegister";
import { supabase } from "@/app/infraestructure/supabase/supabaseClient";
import ErrorRegister from "@/app/presentation/components/errorRegister/ErrorRegister";

export default function FormRegister() {
  const [showPass, setShowPass] = useState({ pass: false, confirm: false });
  const [confirmRegister, setConfirmRegister] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      setErrorRegister(false);
      // 1. Limpieza explícita
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) console.error("Error al cerrar sesión:", signOutError);

      // 2. Esperar un breve momento para limpiar el estado del cliente
      await new Promise((resolve) => setTimeout(resolve, 500));
      const success = await onSubmitRegister(data);

      console.log(data);
      if (success) {
        setConfirmRegister(true);
      }
    } catch (error) {
      setErrorRegister(true);
      console.log(error);
    }
  };

  console.log("Estado de errorRegister:", errorRegister);

  return (
    <section className=" w-full flex flex-col text-textLight ">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4 ">
        <section className=" flex justify-between sm:flex-col w-full gap-2 ">
          <div className=" relative flex flex-col gap-2 w-full min-w-0">
            <label htmlFor="name" className=" font-bold text-xs uppercase ">
              nombre*
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className=" p-2 text-xs border border-borderBtn md:border-borderBtn/50 rounded-md focus:outline-none focus:border-accentForm "
            />
            <section
              className={` absolute -bottom-12 min-[349px]:-bottom-8 md:-bottom-9  left-0 z-500 w-full focus:opacity-0 ${errors.name ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm  text-whiteLight `}
            >
              {errors.name && <ErrorForm error={errors.name.message} />}
            </section>
          </div>
          <div className=" relative flex flex-col gap-2 w-full min-w-0 ">
            <label htmlFor="surname" className=" font-bold text-xs uppercase ">
              Apellido*
            </label>
            <input
              {...register("surname", { required: true })}
              type="text"
              id="surname"
              className=" p-2 text-xs border border-borderBtn md:border-borderBtn/50 rounded-md focus:outline-none focus:border-accentForm "
            />
            <section
              className={` absolute -bottom-12 min-[353px]:-bottom-8 md:-bottom-9  left-0 z-500 w-full focus:opacity-0 ${errors.surname ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}
            >
              {errors.surname && <ErrorForm error={errors.surname.message} />}
            </section>
          </div>
        </section>
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
        <div className=" relative flex flex-col gap-2 ">
          <label
            htmlFor="confirmPassword"
            className=" font-bold text-xs uppercase "
          >
            confirmar contraseña*
          </label>
          <section className=" flex justify-between border border-borderBtn md:border-borderBtn/50 rounded-md has-focus:border has-focus:border-accentForm  ">
            <input
              {...register("confirmPassword", { required: true })}
              type={`${showPass.confirm ? "text" : "password"}`}
              id="confirmPassword"
              className=" w-full p-2 text-xs   outline-none  "
            />
            <button
              type="button"
              className=" mr-8 "
              onClick={() =>
                setShowPass({ ...showPass, confirm: !showPass.confirm })
              }
            >
              {!showPass.confirm ? (
                <Eye size={16} color="#b8b8b8" />
              ) : (
                <EyeOff size={16} color="#b8b8b8" />
              )}
            </button>
          </section>
          <section
            className={` absolute -bottom-8 md:-bottom-9 left-0 z-500 w-full focus:opacity-0 ${errors.confirmPassword ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}
          >
            {errors.confirmPassword && (
              <ErrorForm error={errors.confirmPassword.message} />
            )}
          </section>
        </div>
        <p className=" text-xs text-whiteLight ">*Campo requerido</p>
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="py-2 mt-6 text-textDark bg-accentForm rounded-md disabled:text-textDark/20 transition-all disabled:hover:translate-y-0 hover:-translate-y-0.5 disabled:hover:scale-100 hover:scale-100  duration-100 "
        >
          Registrarse e iniciar
        </button>
      </form>
      {confirmRegister &&
        createPortal(
          <SuccessRegister
            name={getValues("name")?.toUpperCase()}
            surname={getValues("surname")?.toUpperCase()}
            reset={reset}
          />,
          document.body,
        )}
      {errorRegister &&
        createPortal(
          <ErrorRegister closeModal={() => setErrorRegister(false)} />,
          document.body,
        )}
    </section>
  );
}
