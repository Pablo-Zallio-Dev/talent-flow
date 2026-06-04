import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ButtonTheme() {

      const [showIcon, setShowIcon] = useState(false)

      return (

            <section className=" rounded-full" onClick={() => setShowIcon(!showIcon)}>
                  {
                        !showIcon ? <Moon size={20} color="#23212a" /> : <Sun size={20} color="#F9F9F9" />
                  }
            </section>
      )
}