import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ButtonTheme() {

      const [showIcon, setShowIcon] = useState(false)

      return (

            <section className=" rounded-full" onClick={() => setShowIcon(!showIcon)}>
                  {
                        !showIcon ? <Moon size={20} color="#f9f9f9" /> : <Sun size={20} color="#23212a" />
                  }
            </section>
      )
}