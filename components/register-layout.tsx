import type { FC, ReactNode } from 'react'
import { Pressable, Text } from 'react-native'

import { BackgroundScrollView } from './background-scroll-view'
import { Path, Svg } from 'react-native-svg'
import { useRouter } from 'expo-router'

type Props = {
  children: ReactNode
}

const RegisterLayout: FC<Props> = props => {
  const { children } = props
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <BackgroundScrollView className='pt-[3.7%]'>
      <Pressable
        className='-ml-2 pb-[8.4%] flex flex-row items-center'
        onPress={goBack}
      >
        <Svg width={20} height={20} viewBox='0 0 36 36' fill='none'>
          <Path
            d='M22.5 27L13.5 18L22.5 9'
            stroke='white'
            stroke-width='3.63255'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </Svg>
        <Text className='text-white'>Go back</Text>
      </Pressable>
      {children}
    </BackgroundScrollView>
  )
}

export { RegisterLayout }
