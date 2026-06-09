
/* 
(CAPA DOMINIO)Definimos el "molde" para el reclutador
*/

/**
 * Value Objects (Objetos de Valor)
 */
export type RecruiterEmail = {
  readonly email: string; 
};

/**
 * Value Objects (Objetos de Valor)
 */
export type RecruiterPassword = {
  readonly password: string; 
};


/**
 * El reclutador, El molde para lainformacion del reclutador
 */
export type Recruiter = {
  id?: string
  name: string
  surname: string
  email: RecruiterEmail
  password: RecruiterPassword
}
