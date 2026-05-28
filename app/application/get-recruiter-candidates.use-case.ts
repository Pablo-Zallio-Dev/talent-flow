/* 
Capa de Casos de Uso (o Capa de Aplicación). Muestra la lista de candidatos de cada reclutador
*/
import { CandidateRepository } from "../domain/candidate/candidate.repository"

/**
 * Este archivo es el caso de uso encargado de filtrar y recuperar los candidatos. Es un proceso mucho más directo que el de creación, ya que no necesita consultar APIs externas como la de GitHub; va directo al grano.
 * @param candidateRepository 
 * @returns Lista de candidatos
 */
export const getRecruiterCandidates = (candidateRepository: CandidateRepository) => {
      return async ({ recruiterId }: { recruiterId: string }) => {
            const listCandidates = await candidateRepository.findByRecruiterId(recruiterId)
            return listCandidates
      }
}