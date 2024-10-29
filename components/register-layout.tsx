import { useRouter } from 'expo-router'
import type { FC, ReactNode } from 'react'
import { Pressable, Text, View } from 'react-native'

import { GoBackIcon } from '@/icons/go-back'

import { BackgroundView } from './background-view'
import { ButtonLinearGradient } from './button-linear-gradient'

type Props = {
  children: ReactNode
  gotToNextStep?: () => void
}

const RegisterLayout: FC<Props> = props => {
  const { children, gotToNextStep } = props
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <BackgroundView className='pt-[3.7%]'>
      <Pressable
        className='-ml-2 pb-[8.4%] flex flex-row items-center'
        onPress={goBack}
      >
        <GoBackIcon />
        <Text className='text-white'>Go back</Text>
      </Pressable>
      <View className='h-[80vh] flex-1 justify-between pt-[7.5%]'>
        <View>{children}</View>

        <ButtonLinearGradient
          onPress={gotToNextStep}
          className='bottom-[11.3%] self-center'
        >
          <View className='flex flex-1 items-center justify-center'>
            <Text className='text-white text-lg font-quattrocento-sans-bold'>
              Continue
            </Text>
          </View>
        </ButtonLinearGradient>
      </View>
    </BackgroundView>
  )
}

export { RegisterLayout }
