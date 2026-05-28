import { GitHubGateway } from "@/app/domain/candidate/candidate.gateway";

export const apiGitHubGateway = (): GitHubGateway => ({

      getProfile: async(githubUsername: string ) => {
            try {
                  const response = await fetch(`https://api.github.com/users/${githubUsername}`)

                  if (!response.ok) {
                        throw new Error(`Candidato no encontrado`);
                  }

                  const data = await response.json()

                  return {
                        avatarUrl: data.avatar_url,
                        bio: data.bio || 'Sin biografia',
                        publicRepos: data.public_repos || 0
                  }

            } catch {
                  throw new Error("Error al conectar con la API de GitHub")
            }
      }

})