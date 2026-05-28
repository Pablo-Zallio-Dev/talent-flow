/* 
(CAPA DOMINIO) Aquí es donde se deciden y ejecutan las reglas más estrictas de tu negocio sobre los datos de un usuario.
La decisión de que un email deba tener una @ o que una contraseña deba ser robusta es una regla de negocio pura, no depende de la base de datos ni de la interfaz visual
*/

import { RecruiterEmail, RecruiterPassword } from "./recruiter.types"

/**
 * Expresiones Regulares
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Expresiones Regulares
 */
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

/**
 * Funcion que intercepta el email y lo compara con la expresion regular, si es correcto pasa, sino lanza un error.
 * @param param RecruiterEmail, el objeto de valor del archivo de tipo del reclutador
 * @returns Objeto email
 */
export const makeRecruiterEmail = ({ email }: RecruiterEmail) => {
      if (!emailRegex.test(email)) {
            throw new Error('El formato del email no es válido');
      }

      return {email: email}
}

/**
 * Funcion que intercepta el password y lo compara con la expresion regular, si es correcto pasa, sino lanza un error.
 * @param param RecruiterEmail, el objeto de valor del archivo de tipo del reclutador
 * @returns Objeto password
 */
export const makeRecruiterPassword = ({ password }: RecruiterPassword) => {
      if (!passRegex.test(password)) {
            throw new Error('El formato del password no es válido');
      }

      return {password: password}
}

/**
 * La Fábrica del Reclutador (makeRecruiter) Ensambla al reclutador final. Al igual que hacíamos con el candidato, si no le pasamos un id (porque se está registrando por primera vez), la fábrica le genera un identificador único con crypto.randomUUID()
 * @param email 
 * @param password 
 * @param id 
 * @returns 
 */
export const makeRecruiter = ( email: RecruiterEmail, password: RecruiterPassword, id?: string | undefined,) => {
      return {
            id: id || crypto.randomUUID(),
            email,
            password

      }
}