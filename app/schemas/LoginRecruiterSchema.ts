import z from "zod";


export const LoginSchema = z.object({
      email: z.email(("Introduce un correo válido")).min(1, 'Introduce un correo válido'),
      password: z.string().min(1, "La contraseña es obligatoria")
})