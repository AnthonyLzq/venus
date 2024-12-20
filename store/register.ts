import { create } from 'zustand'

import { GENDERS, SKIN_SENSITIVITIES, SKIN_TYPES } from '@/utils/constants'

type ClientStore = {
  fullName: string
  setFullName: (fullName: string) => void
  birthday: string | null
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
  birthday: null,
  setBirthday: birthday => set(() => ({ birthday })),
  gender: GENDERS.NonSelected,
  setGender: gender => set(() => ({ gender })),
  skinType: SKIN_TYPES.NonSelected,
  setSkinType: skinType => set(() => ({ skinType })),
  skinSensitivity: SKIN_SENSITIVITIES.NonSelected,
  setSkinSensitivity: skinSensitivity => set(() => ({ skinSensitivity })),
  concerns: [],
  setConcerns: concern =>
    set(state => {
      const concerns = state.concerns.concat(concern)

      return { concerns }
    })
}))

export { useClientStore }
