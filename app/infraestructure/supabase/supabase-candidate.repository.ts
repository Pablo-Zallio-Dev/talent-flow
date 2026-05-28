import { supabase } from "./supabaseClient";
import { CandidateRepository } from "../../domain/candidate/candidate.repository";
import { Candidate } from "../../domain/candidate/candidate.types";

export class SupabaseCandidateRepository implements CandidateRepository {
      
      // 1. Guardar el candidato en la base de datos
      async saveCandidate(candidate: Candidate): Promise<void> {
            const { error } = await supabase
                  .from('candidates')
                  .insert(candidate);

            if (error) {
                  throw new Error(`Error al guardar el candidato: ${error.message}`);
            }
      }

      // 2. Buscar candidatos por el ID del reclutador
      async findByRecruiterId(recruiterId: string): Promise<Candidate[]> {
            const { data, error } = await supabase
                  .from('candidates')
                  .select('*')
                  .eq('recruiterId', recruiterId);

            if (error) {
                  throw new Error(`Error al buscar candidatos: ${error.message}`);
            }

            return data || [];
      }
}