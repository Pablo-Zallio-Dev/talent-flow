import { useThemeStore } from "@/app/presentation/store/theme_store/themeStore";
import { Moon, Sun } from "lucide-react";

export default function ButtonTheme() {

      const isDarkMode = useThemeStore((state) => state.isDarkMode)
      const toggleTheme = useThemeStore((state) => state.toggleTheme)
      
      return (
            <button
                  className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  aria-label="Cambiar tema"
                  onClick={toggleTheme}
            >
                  {isDarkMode ? (
                        <Sun size={20} color="#F9F9F9" />
                  ) : (
                        <Moon size={20} color="#23212a" />
                  )}
            </button>
      );
}