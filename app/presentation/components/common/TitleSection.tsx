
export type TitleSectionSize = 'small' | 'large'

export type TitleSectionProps = {
      text: string,
      size: TitleSectionSize,
      uppercase?: boolean,
}

export default function TitleSection( {text, size, uppercase }: TitleSectionProps){
      return(
            <section className="flex flex-col items-center gap-6 pt-20 ">
                  <h3 className={` w-max text-xs md:text-sm font-bold rounded-xl border border-borderBtn shadow-md/30 dark:shadow-slate-400 ${uppercase ?'uppercase' :''} ${ size === 'small' ?'py-2 px-8' :'py-3 px-12' } `}> {text} </h3>

            </section>
      )
}