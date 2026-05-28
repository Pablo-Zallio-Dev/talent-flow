/* 
(CAPA DOMINIO) Al igual que pasaba con los repositorios, esto es una interface (un contrato abstracto).
*/

import { GitHubProfile } from "./candidate.types"

/* 
Este archivo define el contrato para un Gateway (Puerta de enlace)
getProfile Es la regla obligatoria para cualquier cartero que vaya a viajar a internet.   
*/
export interface GitHubGateway {
      getProfile( githubUsername: string ): Promise<GitHubProfile> 
}

