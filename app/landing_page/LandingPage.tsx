import { LayoutDashboard, UserRoundPen, Waypoints } from "lucide-react";
import CardHome from "./components/CardHome";
import CircularText from "./components/CircularText";
import ItemFunctionHome from "./components/ItemFunctionHome";
import TextType from "./components/TextType";
import Header from "../presentation/components/header/Header";
import ButtonAccentSmall from "../presentation/components/common/ButtonAccentSmall";
import Footer from "../presentation/components/footer/Footer";


export default function LandingPage() {



      return (
            <>
                  <Header />
                  <main className=" flex flex-col items-center justify-center mt-12  ">
                        <h1 className=" w-11/12 sm:w-9/12 xl:w-1/2 pt-20 pb-14  font-bold text-3xl sm:text-4xl lg:text-6xl text-center lg:leading-18 "> Organiza tus candidatos de forma <span className=" text-colorAccent ">INTELIGENTE</span> </h1>
                        <p className=" w-11/12 sm:w-9/12 xl:w-1/2 pb-16 text-center text-textColorSecondary text-md sm:text-base md:text-lg  "> TalentFlow es la plataforma definitiva para reclutadores que buscan optimizar su proceso de selección con dashboards intuitivos y herramientas de gestión avanzadas. </p>
                        <ButtonAccentSmall text={"iniciar sesion y comienza a organizarte"} uppercase size={"small"} />
                        <CircularText
                              text="AÑADE-ORGANIZA-DESCANSA-"
                              onHover="speedUp"
                              spinDuration={26}
                              className="custom-class mt-12 mb-16"
                        />
                        <p className="  pt-16 text-3xl sm:text-4xl md:text-5xl tracking-[-2px] font-black uppercase  ">Caracteristicas</p>
                        <section className=" flex flex-col items-center text-center ">
                              <h2 className=" w-3/4 md:w-1/2 pb-12 pt-8 text-xl md:text-3xl font-bold "> Todo lo que necesitas para reclutar mejor </h2>
                              <p className="w-3/4 text-md md:text-base text-textColorSecondary "> Herramientas diseñadas específicamente para optimizar cada etapa del proceso de reclutamiento. </p>
                        </section>
                        <section className=" flex flex-wrap items-center justify-center gap-6 md:gap-20 py-18 ">
                              <CardHome icon={LayoutDashboard} text={"Visualiza el estado de todos tus procesos de selección en un solo lugar con métricas en tiempo real."} title={"DASHBOARD INTUITIVO"} />
                              <CardHome icon={Waypoints} text={"Visualiza el estado de todos tus procesos de selección en un solo lugar con métricas en tiempo real."} title={"PIPELINE VISUAL"} />
                              <CardHome icon={UserRoundPen} text={"Visualiza el estado de todos tus procesos de selección en un solo lugar con métricas en tiempo real."} title={"CONTENIDO PERSONALIZADO"} />
                        </section>

                        <section className=" max-w-xl h-38 px-4 text-center ">

                              <TextType
                                    text={["¿Listo para transformar tu proceso de reclutamiento?", "Miles de reclutadores están contratando mejor y más rápido con TalentFlow!"]}
                                    typingSpeed={10}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter="_"
                                    deletingSpeed={100}
                                    variableSpeed={{ min: 60, max: 120 }}
                                    cursorBlinkDuration={0.5}
                              />
                        </section>

                        <p className="  pt-16 text-3xl sm:text-4xl md:text-5xl tracking-[-2px] font-black uppercase  ">¿Como funciona?</p>

                        <section className=" flex flex-col items-center text-center ">
                              <h2 className=" w-3/4 md:w-1/2 py-16 text-xl md:text-3xl font-bold "> Del caos a claridad en 3 simples pasos </h2>
                              <p className="w-3/4 text-sm md:text-base text-textColorSecondary "> Conecta tus fuentes de candidatos o importa CVs directamente. Compatible con LinkedIn, Indeed y más. </p>
                        </section>

                        <section className=" flex flex-wrap justify-center py-18 gap-8 md:gap-16 ">
                              <ItemFunctionHome numberItem={1} title={"IMPORTA EL CANDIDATO"} text={"Conecta tus fuentes de candidatos o importa CVs directamente. Compatible con LinkedIn, Indeed y más."} />
                              <ItemFunctionHome numberItem={2} title={"Organiza el pipeline"} text={"Crea etapas personalizadas y mueve candidatos a través del proceso con facilidad."} />
                              <ItemFunctionHome numberItem={3} title={"IMPORTA EL CANDIDATO"} text={"Usa datos y colaboración del equipo para tomar la mejor decisión de contratación."} />
                        </section>
                        <Footer />
                  </main>
            </>
      )
}