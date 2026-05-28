'use client'
import useInitializeTheme from "./presentation/hooks/useInitializeTheme";
import { useThemeStore } from "./presentation/store/theme_store/themeStore";

export default function Home() {


      const toggleTheme = useThemeStore((state) => state.toggleTheme)
      useInitializeTheme()



      return (
            <>
                  <section className=" bg-background text-foreground p-20 ">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam tempora itaque pariatur voluptates corrupti recusandae sint dolores? Autem saepe dignissimos cupiditate assumenda, aut veritatis rerum unde totam amet distinctio.</p>
                        <p className=" font-mono ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus excepturi veritatis iste sit quidem deleniti nemo qui, ut perferendis voluptates magni recusandae mollitia natus illo dolorem nulla explicabo distinctio.</p>
                  </section>
                  <button className="" onClick={toggleTheme}>Cambiar tema</button>
            </>
      );
}

