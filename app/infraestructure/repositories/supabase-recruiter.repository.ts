import { makeRecruiter, makeRecruiterEmail, makeRecruiterPassword } from "@/app/domain/recruiter/recruiter.action"
import { RecruiterRepository } from "@/app/domain/recruiter/recruiter.repository"
import { supabase } from "../supabase/supabaseClient"

export interface SupabaseRecruiter {
      id: string,
      email: string,
      password: string
}

export const SupabaseRecruiterRepository = (): RecruiterRepository => {
      return {
            saveRecruiter: async (recruiter) => {
                  const rawRecruiter: SupabaseRecruiter = {
                        id: recruiter.id || crypto.randomUUID(),
                        email: recruiter.email.email,
                        password: recruiter.password.password
                  }

                  await supabase.from('recruiters').insert(rawRecruiter)

            },
            findByEmail: async (email) => {

                  const { data } = await supabase.from('recruiters').select().eq('email', email).single()

                  if (!data) {
                        return null
                  }

                
                  return makeRecruiter(
                        data.name, // Asegúrate de traer el nombre de Supabase si existe
                        data.surname,
                        makeRecruiterEmail(data.email),
                        makeRecruiterPassword(data.password ),
                        data.id
                  )

            },
      }
}