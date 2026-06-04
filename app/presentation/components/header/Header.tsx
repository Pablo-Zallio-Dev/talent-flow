import ButtonTheme from "./components/ButtonTheme";

export default function Header() {
      return (
            <header>
                  <section className=" fixed top-0 z-1000 w-full bg-background/50 flex items-center justify-between py-4 md:py-8 px-4 md:px-8 border-b-2 border-borderBtn backdrop-blur-sm ">
                        <h2 className="   text-3xl md:text-5xl font-extrabold text-colorAccent ">TalentFlow</h2>
                        {/* Seccion de usuario */}
                              <ButtonTheme />            
                  </section>
            </header>
      )
}