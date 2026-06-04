import Link from "next/link";

export default function Footer(){
      return(
            <footer className=" flex flex-col items-center gap-3 w-full pt-4 mb-6 text-center border-t border-borderBtn ">
                  <section className="">
                  <h3 className=" text-colorAccent text-xl font-bold uppercase ">TalentFlow</h3>
                  <p className=" text-md text-colorAccent font-semibold ">2026</p>
                  </section>
                  <p className=" py-2 text-sm md:w-1/2 ">La plataforma de reclutamiento más inteligente para organizar y gestionar candidatos.</p>
                  <p className=" text-sm ">Diseñado 🎨 y Desarrollado 🏗️ por <Link href={""} className=" text-colorAccent " >PabloZallioDev</Link> </p>
            </footer>
      )
}