import { User } from "@supabase/supabase-js"; // <-- Importamos el tipo real

export interface AuthStore {
  user: User | null; // <-- Ahora 'user' es exactamente lo que Supabase devuelve
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void; // <-- Ajustamos el argumento aquí
  logout: () => void;
  updateProfile: (updateProfile: Partial<User>) => void; // <-- Tipado seguro para la actualización
}