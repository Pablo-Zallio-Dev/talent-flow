/* 
Capa de Casos de Uso (o Capa de Aplicación). Su trabajo es coordinar a las piezas del Dominio para ejecutar una acción concreta que el usuario ha pedido desde la pantalla: en este caso, "Crear un Candidato".
*/
import { makeCandidate } from "../domain/candidate/candidate.action";
import { GitHubGateway } from "../domain/candidate/candidate.gateway";
import { CandidateRepository } from "../domain/candidate/candidate.repository";


/**
 * Este archivo es el cerebro detrás de la acción de añadir un candidato. Utiliza un patrón llamado Inyección de Dependencias a través de una función que devuelve otra función (currificación).
 * @param gitHubGateway 
 * @param candidateRepository 
 * @returns 
 */
export const createCandidateUseCase = (gitHubGateway: GitHubGateway, candidateRepository: CandidateRepository) => {

      return async ({ name, githubUsername, linkedin, recruiterId }: { name: string, githubUsername: string, linkedin: string, recruiterId: string }) => {


            const gitHubProfile = await gitHubGateway.getProfile(githubUsername)

            const newCandidate = makeCandidate({
                  name,
                  github: gitHubProfile,
                  githubUsername,
                  linkedin,
                  recruiterId
            })

            await candidateRepository.saveCandidate(newCandidate)

            return newCandidate
            

      }

}

