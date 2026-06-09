import { z } from 'zod'
import { emailRegex, passRegex } from '../domain/recruiter/recruiter.action'

export const RegisterSchema = z.object({
      name: z.string().min(1,'El nombre es obligatorio').trim(),
      surname: z.string().min(1, 'El apellido es obligatorio').trim(),
      email: z.email().regex(emailRegex, 'Email invalido').toLowerCase(),
      password: z.string().regex(passRegex, 'Mínimo 8 caracteres, con mayúsculas y números.     ').min(8, 'Minimo 8 caracteres'),
      confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
      message: 'La contraseña no coincide',
      path: ['confirmPassword']
} )

