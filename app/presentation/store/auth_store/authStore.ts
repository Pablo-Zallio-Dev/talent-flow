import { create } from "zustand";
import { AuthStore } from "./authStore.interface";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthStore>()(
      persist(
            (set) => ({

                  user: null,

                  token: null,

                  isAuthenticated: false,

                  login: (user, token) => set(() => ({
                        user: user,
                        token: token,
                        isAuthenticated: true,
                  })),

                  logout: () => set(() => ({
                        user: null,
                        token: null,
                        isAuthenticated: false,
                  })),

                  updateProfile: (updateProfile) => set((state) => ({
                        user: state.user ? { ...state.user, ...updateProfile } : null
                  }))


            }),
            {
                  name: 'talentFlow-auth-storeage'
            }
      )
)