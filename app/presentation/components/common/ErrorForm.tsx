
export default function ErrorForm( {error}: {error: string | undefined} ){
      return(
            <>
                  <p className=" p-2 text-[10px] "> {error} </p>
            </>
      )
}