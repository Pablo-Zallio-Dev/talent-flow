/* 
(CAPA DOMINIO) Define las reglas de juego lógicas para el manejo de los reclutadores. Este archivo es el Contrato del Repositorio de Reclutadores
*/

import { Recruiter } from "./recruiter.types";

/**
 * RecruiterRepository Define las operaciones que la aplicación podrá hacer con las cuentas de los usuarios (registro e inicio de sesión).
 * saveRecruiter Es el contrato para el Registro
 * findByEmail Es el contrato para el Login / Inicio de sesión
 */
export interface RecruiterRepository {
      saveRecruiter( recruiter: Recruiter ): Promise<void>
      findByEmail( email: string): Promise<Recruiter | null>
}