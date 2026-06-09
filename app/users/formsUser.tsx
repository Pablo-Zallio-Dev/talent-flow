import Logo from "../presentation/components/common/Logo";
import FormUser from "./components/FormUser";

      export default function FormsUser(){
            return(
                  <section className="  w-full bg-register ">
                        <section className=" flex flex-col items-center justify-center w-full py-6 bg-backgroundRegister/70 ">
                              <Logo />
                              <section className=" min-h-18 ">
                              <h2 className=" pt-3 text-3xl md:text-5xl font-extrabold text-colorAccent ">TalentFlow</h2>
                              </section>
                              <section className=" w-10/12 max-w-140 min-h-6 py-2 px-10 md:px-12   border border-borderBtn/30 rounded-xl ">
                                    <p className=" text-sm md:text-base text-textLight text-center ">Workspace de Contratación & Pipeline de Candidatos</p>
                              </section>
                              <section className=" flex justify-center w-11/12 max-w-140 py-5 px-4 my-3 bg-linear-to-br from-accentForm from-0% to-backgroundRegister to-40% rounded-xl">
                                    <FormUser />
                                    
                              </section>
                        </section>
                  </section>
            )
      }