import Logo from "../presentation/components/common/Logo";

      export default function FormsUser(){
            return(
                  <section className=" h-dvh w-full bg-register ">
                        <section className=" flex flex-col  items-center justify-center h-dvh w-full bg-backgroundRegister/70 ">
                              <Logo />
                              <h2 className=" py-3 text-5xl md:text-5xl font-extrabold text-colorAccent ">TalentFlow</h2>
                              <section className=" w-3/4 max-w-100 py-4 px-10 md:px-12  mt-6   border border-borderBtn/30 rounded-xl ">
                                    <p className=" text-sm md:text-base text-textLight text-center ">Workspace de Contratación & Pipeline de Candidatos</p>
                              </section>
                              <section className=" h-72 w-60 bg-linear-to-br from-accentForm from-0%  to-backgroundRegister to-40% ">
                                    
                                    
                              </section>
                        </section>
                  </section>
            )
      }