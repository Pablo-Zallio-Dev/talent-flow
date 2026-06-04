'use client'
import LandingPage from "./landing_page/LandingPage";
import useInitializeTheme from "./presentation/hooks/useInitializeTheme";

export default function Home() {

      useInitializeTheme()

      return (
            <>
                  <LandingPage />
            </>
      );
}

