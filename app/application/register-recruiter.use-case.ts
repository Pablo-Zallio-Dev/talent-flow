/* 
Capa de Casos de Uso (o Capa de Aplicación). orquesta el proceso de negocio de registrar a un nuevo usuario en la plataforma.
*/
import { makeRecruiter, makeRecruiterEmail, makeRecruiterPassword } from "../domain/recruiter/recruiter.action";
import { RecruiterRepository } from "../domain/recruiter/recruiter.repository";
import { RecruiterEmail, RecruiterPassword } from "../domain/recruiter/recruiter.types";


/**
 * 
 * @param repository 
 * @returns 
 */
export const registerRecruiter = (repository: RecruiterRepository) => {
      return async ({ name, surname, email, password }: { name:string ,surname: string , email: RecruiterEmail; password: RecruiterPassword }) => {
            const validEmail = makeRecruiterEmail(email);
            const validPassword = makeRecruiterPassword(password);
            const newRecruiter = makeRecruiter(name, surname, validEmail, validPassword);
            await repository.saveRecruiter(newRecruiter);
      };
};
