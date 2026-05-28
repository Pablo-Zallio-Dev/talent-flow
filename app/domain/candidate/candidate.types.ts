
/* 
(CAPA DOMINIO) Aqui definimos los TIPOS del candidato, es el molde de los datos que viajaran en la app.
*/


/**
 * PipelineStage, Tipo de union, (union type), mediante typescript elejimos solamente las palabras que se van a utilizar para describir es estado del candidato
 */

export type PipelineStage =
      | "sourced"
      | "screening"
      | "technical"
      | "offer"
      | "rejected"


/**
 * GitHubProfile, Es la estructura de los datos que vamos a ir a buscar a la API de GitHub. Creamos el molde de la informacion que solo nos va a hacer falta.
 */
export type GitHubProfile = {
      avatarUrl: string
      bio: string
      publicRepos: number
}


/**
 * Candidate, Es el molde de la entidad principal de la aplicacion. 
 * El hacer opcional el perfil de github con (?) hace que podamos tener un candidato sin perfil de github duranete unmomento sin que nos de ningun tipo de error.
 */
export type Candidate = {
      id: string,
      recruiterId: string,
      name: string,
      githubUsername: string,
      github?: GitHubProfile,
      linkedin: string,
      stage: PipelineStage,
      createdAt: string,
      updatedAt: string
}