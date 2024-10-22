import { create } from 'zustand'

import { GENDERS } from '@/utils/constants'

type ClientStore = {
  fullName: string
  setFullName: (fullName: string) => void
  birthday: string
  setBirthday: (birthday: string) => void
  gender: string
  setGender: (gender: string) => void
  skinType: string
  setSkinType: (skinType: string) => void
  skinSensitivity: string
  setSkinSensitivity: (skinSensitivity: string) => void
  concerns: string[]
  setConcerns: (concern: string) => void
}

const useClientStore = create<ClientStore>()(set => ({
  fullName: '',
  setFullName: fullName => set(() => ({ fullName })),
  birthday: '',
  setBirthday: birthday => set(() => ({ birthday })),
  gender: GENDERS.NonSelected,
  setGender: gender => set(() => ({ gender })),
  skinType: '',
  setSkinType: skinType => set(() => ({ skinType })),
  skinSensitivity: '',
  setSkinSensitivity: skinSensitivity => set(() => ({ skinSensitivity })),
  concerns: [],
  setConcerns: concern =>
    set(state => {
      const concerns = state.concerns.concat(concern)

      return { concerns }
    })
}))

export { useClientStore }
