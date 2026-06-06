"use client";
import { useForm } from 'react-hook-form'; // Importante: 'react-hook-form', no solo 'hookform'
import { zodResolver } from '@hookform/resolvers/zod'; // Debe llevar el @ al inicio
import { LoginSchema } from '../../schemas/RegisterRecruiterSchema'; // Tu ruta local
import ErrorForm from '@/app/presentation/components/common/ErrorForm';
import { onSubmitRegister } from '../utilities/onSubmitRegister.function';
export default function FormRegister() {
      /* Generar estado para mostrrar o no la contraseña */

      const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
      } = useForm({
            resolver: zodResolver(LoginSchema),
      });

   /*    const prueba = (data: object) => {
            console.log(data)
            reset()
      } */


      return (
            <section className=" w-full flex flex-col text-textLight ">
                  <form onSubmit={handleSubmit(onSubmitRegister)} action=" " className=" flex flex-col gap-4 ">
                        <section className=" flex justify-between sm:flex-col w-full gap-2 ">
                              <div className=" relative flex flex-col gap-2 w-full min-w-0">
                                    <label htmlFor="name" className=" font-bold text-xs uppercase ">
                                          nombre
                                    </label>
                                    <input
                                          {...register("name")}
                                          type="text"
                                          id="name"
                                          className=" p-2 text-xs border border-borderBtn/40 rounded-md focus:outline-none focus:border-accentForm "
                                    />
                                    <section className={` absolute -bottom-8 left-0 z-500 w-full focus:opacity-0 ${ errors.name ?'opacity-100' :'opacity-0' } transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}>
                                          {errors.name && <ErrorForm error={errors.name.message} />}
                                    </section>
                              </div>
                              <div className=" relative flex flex-col gap-2 w-full min-w-0 ">
                                    <label htmlFor="surname" className=" font-bold text-xs uppercase ">
                                          Apellido
                                    </label>
                                    <input
                                          {...register("surname")}
                                          type="text"
                                          id="surname"
                                          className=" p-2 text-xs border border-borderBtn/40 rounded-md focus:outline-none focus:border-accentForm "
                                    />
                                    <section className={` absolute -bottom-8 left-0 z-500 w-full focus:opacity-0 ${ errors.surname ?'opacity-100' :'opacity-0' } transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}>
                                          {errors.surname && <ErrorForm error={errors.surname.message} />}
                                    </section>
                              </div>
                        </section>
                        <div className="relative flex flex-col gap-2 ">
                              <label htmlFor="email" className=" font-bold text-xs uppercase ">
                                    email
                              </label>
                              <input
                                    {...register("email")}
                                    type="email"
                                    id="email"
                                    className=" p-2 text-xs border border-borderBtn/40 rounded-md focus:outline-none focus:border-accentForm "
                              />
                              <section className={` absolute -bottom-8 left-0 z-500 w-full focus:opacity-0 ${ errors.email ?'opacity-100' :'opacity-0' } transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}>
                                          {errors.email && <ErrorForm error={errors.email.message} />}
                                    </section>
                        </div>
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="password" className=" font-bold text-xs uppercase ">
                                    contraseña
                              </label>
                              <input
                                    {...register("password")}
                                    type="password"
                                    id="password"
                                    className=" p-2 text-xs border border-borderBtn/40 rounded-md focus:outline-none focus:border-accentForm "
                              />
                             <section className={` absolute -bottom-8 left-0 z-500 w-full focus:opacity-0 ${ errors.password ?'opacity-100' :'opacity-0' } transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}>
                                          {errors.password && <ErrorForm error={errors.password.message} />}
                                    </section>
                        </div>
                        <div className=" relative flex flex-col gap-2 ">
                              <label
                                    htmlFor="confirmPassword"
                                    className=" font-bold text-xs uppercase "
                              >
                                    confirmar contraseña
                              </label>
                              <input
                                    {...register("confirmPassword")}
                                    type="password"
                                    id="confirmPassword"
                                    className=" p-2 text-xs border border-borderBtn/40 rounded-md focus:outline-none focus:border-accentForm "
                              />
                              <section className={` absolute -bottom-8 left-0 z-500 w-full focus:opacity-0 ${ errors.confirmPassword ?'opacity-100' :'opacity-0' } transition-opacity duration-300 ease-in-out rounded-md  bg-accentForm text-whiteLight `}>
                                          {errors.confirmPassword && <ErrorForm error={errors.confirmPassword.message} />}
                                    </section>
                        </div>
                        <button type="submit"
                              className=" py-2 mt-6 text-textDark bg-accentForm rounded-md ">
                              Registrarse e iniciar
                        </button>
                  </form>
            </section>
      );
}

