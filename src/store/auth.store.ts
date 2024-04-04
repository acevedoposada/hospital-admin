import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(() => ({}), {
    name: 'auth-store',
    storage: createJSONStorage(() => sessionStorage),
  })
);
