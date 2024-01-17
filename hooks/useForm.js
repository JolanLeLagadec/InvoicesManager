import { create } from 'zustand'

const useForm = create((set) => ({
isOpen: false,
onOpen: () => set({isOpen: true}),
onClose: () => set({isOpen: false})
}))

export default useForm