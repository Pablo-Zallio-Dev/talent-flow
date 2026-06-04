
export type ItemFunctionHomeProps = {
      numberItem: number,
      title: string,
      text: string
}

export default function ItemFunctionHome( {numberItem, title, text}: ItemFunctionHomeProps ){
      return(
            <section className=" flex flex-col items-center gap-8 py-5 px-9 w-80 shadow-md/25 shadow-foreground md:hover:shadow-lg/40 md:hover:-translate-y-5 duration-150 rounded-lg ">
                  <section className=" flex justify-center items-center w-12 h-12 bg-colorAccent rounded-full  ">
                        <p className=" text-textColor font-black "> {numberItem} </p>
                  </section>
                  <section className=" flex flex-col items-center gap-2 ">
                  <h2 className=" text-md md:text-base uppercase "> {title} </h2>
                  <p className=" text-center text-sm md:text-md text-textColorSecondary "> {text} </p>
                  </section>
            </section>
      )
}