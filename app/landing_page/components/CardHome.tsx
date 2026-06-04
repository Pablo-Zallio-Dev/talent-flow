import { LucideIcon } from "lucide-react"


export type CardHomeProps = {
      icon: LucideIcon,
      text: string,
      title: string
}


export default function CardHome( {icon: Icon, title, text}: CardHomeProps ){
      return(
            <section className=" flex flex-col gap-3 w-72 md:w-80 p-4 bg-cardHome border border-colorAccent rounded-xl md:hover:-translate-y-6 md:hover:scale-105 md:hover:shadow-lg/20 md:hover:shadow-foreground transition-all duration-300 ">
                  <section className=" w-min p-1 rounded-sm bg-colorAccent/20 ">
                  <Icon size={20} color="#129494" />
                  </section>
                  <h2 className=" text-sm md:text-base font-bold "> {title} </h2>
                  <p className=" text-sm md:text-md "> {text} </p>
            </section>
      )
}