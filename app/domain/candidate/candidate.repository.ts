/* 
(CAPA DE DOMINO) Aunque la palabra Repository suena a base de datos (Infraestructura), fíjate bien en que esto es una interface (un contrato abstracto), no el código que habla con Supabase. simplemente define las reglas de comunicación que debe cumplir cualquier base de datos que quieras conectar a la aplicación.
*/

import { Candidate } from "./candidate.types";

/**
 * Este archivo es el Contrato (o la interfaz) del repositorio de candidatos.
 * saveCandidate, Es la promesa de que habrá una función para guardar.
 * findByRecruiterId Es la regla para buscar.
 * 
 */
export interface CandidateRepository {
      saveCandidate(candidate: Candidate): Promise<void>,
      findByRecruiterId( recruiterId: string ): Promise<Candidate[]>
}