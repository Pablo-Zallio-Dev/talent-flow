import { makeRecruiter, makeRecruiterEmail, makeRecruiterPassword } from "@/app/domain/recruiter/recruiter.action"
import { RecruiterRepository } from "@/app/domain/recruiter/recruiter.repository"
import { supabase } from "../supabase/supabaseClient"

export interface SupabaseRecruiter {
      id:string,
      email: string,
      password: string
}

export const SupabaseRecruiterRepository = (): RecruiterRepository => {
      return {
            saveRecruiter: async(recruiter) => {
                  const rawRecruiter: SupabaseRecruiter = {
                        id: recruiter.id || crypto.randomUUID(),
                        email:recruiter.email.email,
                        password: recruiter.password.password
                  }

                  await supabase.from('recruiters').insert(rawRecruiter)

            },
            findByEmail: async(email) => {

                  const {data} = await supabase.from('recruiters').select().eq('email', email).single()

                  if( !data ) {
                       return null
                  }

                  const dataEmail = makeRecruiterEmail(data.email)
                  const dataPassword = makeRecruiterPassword(data.password)

                  return makeRecruiter(dataEmail, dataPassword, data.id)
                  
            },
      }
}