/* 
Capa de Casos de Uso (o Capa de Aplicación).
*/
import { RecruiterRepository } from "../domain/recruiter/recruiter.repository";

/**
 * Es el encargado de dictar el orden de los pasos lógicos que deciden si un usuario tiene permiso para entrar o no a la aplicación.
 * @param repository RecruiterRepository
 * @returns 
 */
export const loginRecruiter = (repository: RecruiterRepository) => {
      return async({ email, password}: {email: string; password: string }) => {
            const foundRecruiter = await repository.findByEmail(email)
            if( !foundRecruiter ){
                  throw new Error('El usuario no existe')
            } 
            if ( password !== foundRecruiter.password.password ){
                  throw new Error('La contraseña es incorrecta')
            }
      }
}