import { useEffect } from "react";
import { useThemeStore } from "../store/theme_store/themeStore";

/**
 * Hook para cambiar el tema de la app
 * @returns isDarkMode, un valor booleano para cambiar el tema
 */
const useInitializeTheme = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return isDarkMode;
};
export default useInitializeTheme;
