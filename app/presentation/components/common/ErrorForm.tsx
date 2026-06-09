
export default function ErrorForm( {error}: {error: string | undefined} ){
      return(
            <>
                  <p className=" py-2 px-1 text-xs md:text-sm text-textDark "> {error} </p>
            </>
      )
}