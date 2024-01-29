import { create } from "zustand";

const useForm = create((set) => ({
  isOpen: {
    Edit: false,
    Add: false,
  },
  onOpen: (name) => set({ isOpen: { [name]: true } }),
  onClose: (name) => set({ isOpen: { [name]: false } }),
}));

export default useForm;
