

/* 
(CAPA DOMINIO), define las reglas esenciales de nuestro negocio (en este caso, las reglas de qué requisitos mínimos se necesitan para que un candidato "exista" en nuestro sistema)
*/


import { Candidate, GitHubProfile, PipelineStage } from "./candidate.types";

/**
 * Es el molde de los datos que vas a recibir del formulario de la pantalla.
 */
interface MakeCandidateProps {
      name: string;
      githubUsername: string;
      linkedin: string;
      id?: string;
      recruiterId: string,
      github?: GitHubProfile;
      stage?: PipelineStage;
      createdAt?: string;
      updatedAt?: string;
}


/**
 * Factory Function (Función Fábrica). Su único trabajo en la vida es recibir unos datos sueltos y crudos, procesarlos y devolver un objeto Candidate perfecto y listo para usar
 * @param props MakeCandidateProps
 * @returns Candidate
 */
export const makeCandidate = (props: MakeCandidateProps): Candidate => {

      const now = new Date().toISOString();

      return {
            id: props.id || crypto.randomUUID(),
            recruiterId: props.recruiterId,
            name: props.name,
            githubUsername: props.githubUsername,
            linkedin: props.linkedin,
            github: props.github,
            stage: props.stage || "sourced",
            createdAt: props.createdAt || now,
            updatedAt: props.updatedAt || now,
      };
};