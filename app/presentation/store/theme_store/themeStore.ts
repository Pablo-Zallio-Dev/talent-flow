import { create } from "zustand";
import { ThemeState } from "./themeStore.interface";
import { persist } from "zustand/middleware";

export const useThemeStore = create<ThemeState>()(
      persist(
           (set) =>({
                  isDarkMode: false,

                  toggleTheme: () => set((state) => {

                        const nextMode = !state.isDarkMode;

                        if(nextMode){
                              document.documentElement.classList.add('dark');
                        } else {
                              document.documentElement.classList.remove('dark');
                        }
                        return { isDarkMode: nextMode };
                  })
           }),
           {name: 'talentflow-theme-storage'} 
      )
)