import { useRouter } from 'expo-router'
import { startTransition, useState, type FC } from 'react'
import { Text, View } from 'react-native'

import { ButtonLinearGradient } from '@/components/button-linear-gradient'
import { RegisterLayout } from '@/components/register-layout'
import { Button } from '@/components/ui/button'
import { QuestionMarkIcon } from '@/icons/question-mark'
import { DrySkinIcon } from '@/icons/skin-dry'
import { NormalSkinIcon } from '@/icons/skin-normal'
import { OilSkinIcon } from '@/icons/skin-oil'
import { useClientStore } from '@/store/register'
import { SKIN_TYPES } from '@/utils/constants'
import { cn } from '@/utils/misc'

const skinTypesEntries = Object.entries(SKIN_TYPES)

type SkinButtonProps = {
  skinType: string
  onPress: () => void
  className?: string
}

const SkinButton: FC<SkinButtonProps> = props => {
  const { skinType, onPress, className } = props

  if (!skinType) return null

  return (
    <Button
      variant='secondary'
      size='lg'
      className={cn('flex flex-row justify-start px-4 gap-x-4', className)}
      onPress={onPress}
    >
      <View className='bg-white rounded-3'>
        {skinType === SKIN_TYPES.Normal && <NormalSkinIcon />}
        {skinType === SKIN_TYPES.Dry && <DrySkinIcon />}
        {skinType === SKIN_TYPES.Oil && <OilSkinIcon />}
        {skinType === SKIN_TYPES.Unknown && <QuestionMarkIcon />}
      </View>
      <Text className='text-white font-quattrocento-sans-bold'>{skinType}</Text>
    </Button>
  )
}

export default function Step2() {
  const router = useRouter()
  const { skinType, setSkinType } = useClientStore()
  const [error, setError] = useState(false)

  const goToStep3 = () => {
    if (skinType === SKIN_TYPES.NonSelected) {
      setError(true)

      return
    }

    router.push('/register/step3')
  }

  return (
    <RegisterLayout>
      <View>
        <Text className='text-white text-3xl font-kiwi-maru-medium'>
          What's your skin type?
        </Text>
        <Text className='text-white font-kiwi-maru mt-4'>
          Knowing your skin type helps us give you more tailored recommendations
        </Text>
        <View className='mt-5 flex flex-col gap-y-4'>
          {skinTypesEntries.map(([key, value], index) => (
            <SkinButton
              key={key}
              skinType={value}
              onPress={() => {
                startTransition(() => {
                  setSkinType(value)
                  setError(false)
                })
              }}
              className={cn(
                skinType === value ? 'bg-purple-5' : '',
                skinTypesEntries.length - 1 !== index
                  ? ''
                  : error
                    ? 'mb-1'
                    : 'mb-5'
              )}
            />
          ))}
        </View>
        {error && (
          <Text className='text-red-50 text-sm font-kiwi-maru'>
            Please select your skin type
          </Text>
        )}
      </View>
      <ButtonLinearGradient
        onPress={goToStep3}
        className='bottom-[11.3%] self-center'
      >
        <View className='flex flex-1 items-center justify-center'>
          <Text className='text-white text-lg font-quattrocento-sans-bold'>
            Continue
          </Text>
        </View>
      </ButtonLinearGradient>
    </RegisterLayout>
  )
}
