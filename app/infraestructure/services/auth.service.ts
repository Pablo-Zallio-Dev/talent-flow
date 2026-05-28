import { useAuthStore } from "@/app/presentation/store/auth_store/authStore";
import { supabase } from "../supabase/supabaseClient"; 

export const loginRequest = async (email: string, password: string) => {
  // 1. Hacemos la petición con el email y contraseña que vengan del formulario
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  // 2. Si Supabase se queja, lanzamos el error
  if (error) {
    throw new Error(error.message);
  }

  // 3. ¡Aquí es donde usamos 'data'! Extraemos el usuario y el token
  const user = data.user;
  const token = data.session?.access_token || null;

  // 4. Se los mandamos a tu store de Zustand para mantener la sesión abierta
  if (user && token) {
    useAuthStore.getState().login(user, token);
  } else {
    throw new Error("No se pudo recuperar la sesión de Supabase");
  }
};