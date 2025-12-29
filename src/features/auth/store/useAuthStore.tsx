import { create } from 'zustand';

interface AuthStore {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  formData: { name: string; email: string; password: string; confirmPassword?: string };
  setFormData: (formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLogin: true,
  setIsLogin: (isLogin) => set({ isLogin }),
  showPassword: false,
  setShowPassword: (showPassword) => set({ showPassword }),
  formData: { name: '', email: '', password: '', confirmPassword: '' },
  setFormData: (formData) => set({ formData })
}));
