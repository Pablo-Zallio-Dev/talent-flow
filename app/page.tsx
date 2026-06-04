'use client'

import useInitializeTheme from "./presentation/hooks/useInitializeTheme";
import LandingPage from "./presentation/pages/landing_page/LandingPage";

/* import useInitializeTheme from "./presentation/hooks/useInitializeTheme";
import { useThemeStore } from "./presentation/store/theme_store/themeStore"; */
/* 
import CardHome from "./presentation/components/common/CardHome";
import { LayoutDashboard } from "lucide-react";
import ItemFunctionHome from "./presentation/components/common/ItemFunctionHome";
import ButtonSession from "./presentation/components/common/ButtonSession"; */

export default function Home() {


      /* const toggleTheme = useThemeStore((state) => state.toggleTheme)
      useInitializeTheme() */

      useInitializeTheme()

 

      return (
            <>
            <LandingPage />
            </>
      );
}

/* 

<section className=" flex flex-col gap-10 justify-center items-center bg-background transition-colors duration-300 py-12 ">

               <CardHome icon={LayoutDashboard} title='DASHBOARD INTUITIVO' text='Visualiza el estado de todos tus procesos de selección en un solo lugar con métricas en tiempo real.' />
            
            <ItemFunctionHome numberItem={1} title={"IMPORTA EL CANDIDATO"} text={"Conecta tus fuentes de candidatos o importa CVs directamente. Compatible con LinkedIn, Indeed y más."}  />

            <section className=" ">
                  
            </section>
            
            </section>
                  <button className=" my-12 text-textDark " onClick={toggleTheme}>Cambiar tema</button>*/

