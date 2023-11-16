import create from "zustand";

export const registrationInitialValue = {
  nome: "",
  sobrenome: "",
  email: "",
};

const useRegistration = create((set) => ({
  registerStep: 1,
  setRegisterStep: (step) => set({ registerStep: step }),

  registerData: registrationInitialValue,
  setRegisterData: (data) => set({ registerData: data }),
  clearRegisterData: () => set({ registrationData: null }),
}));

export default useRegistration;
