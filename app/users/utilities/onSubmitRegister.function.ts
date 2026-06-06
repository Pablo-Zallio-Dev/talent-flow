import { supabase } from "@/app/infraestructure/supabase/supabaseClient";
import { LoginSchema } from "@/app/schemas/RegisterRecruiterSchema";
import z from "zod";

type LoginFormData = z.infer<typeof LoginSchema>;

export const onSubmitRegister = async (data: LoginFormData) => {
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (authError) throw authError;

    /* if (authData.user) {
      const { error: dbError } = await supabase.from("reclutadores").insert({
        id: authData.user.id,
        name: data.name,
        surname: data.surname,
        email: data.email,
      });

      if(dbError) throw dbError; */

      console.log('¡Reclutador correcto!', authData)
    
  } catch (error) {
      if (error instanceof Error) {
      console.error("Error en el proceso de registro:", error.message);
      // Aquí podrías añadir una notificación al usuario (ej: toast.error)
  }}
};
