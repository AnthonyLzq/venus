import { useRouter } from 'expo-router'
import { FC, useState } from 'react'
import { Text, View } from 'react-native'

import { RegisterLayout } from '@/components/register-layout'
import { Button } from '@/components/ui/button'
import { HappyFace } from '@/icons/face-happy'
import { NeutralFace } from '@/icons/face-neutral'
import { SadFace } from '@/icons/face-sad'
import { useClientStore } from '@/store/register'
import {
  SKIN_SENSITIVITIES,
  SKIN_SENSITIVITIES_DESCRIPTIONS
} from '@/utils/constants'
import { cn } from '@/utils/misc'

const skinSensitivitiesEntries = Object.entries(SKIN_SENSITIVITIES)

type SkinSensitivityButtonProps = {
  skinType: string
  onPress: () => void
  className?: string
}

const SkinSensitivityButton: FC<SkinSensitivityButtonProps> = props => {
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
        {skinType === SKIN_SENSITIVITIES.VerySensitive && <SadFace />}
        {skinType === SKIN_SENSITIVITIES.Sensitive && <NeutralFace />}
        {skinType === SKIN_SENSITIVITIES.NotSensitive && <HappyFace />}
      </View>
      <Text className='text-white font-quattrocento-sans-bold'>{skinType}</Text>
    </Button>
  )
}

type SkinSensitivityDescriptionProps = {
  skinType: string
}

const SkinSensitivityDescription: FC<
  SkinSensitivityDescriptionProps
> = props => {
  const { skinType } = props

  if (!skinType) return null

  return (
    <View className='bg-purple-4 mt-2 p-2 border-l-4 border-purple-3'>
      <Text className='text-white text-[12px] font-kiwi-maru'>
        {SKIN_SENSITIVITIES_DESCRIPTIONS[skinType]}
      </Text>
    </View>
  )
}

export default function Step3() {
  const router = useRouter()
  const { skinSensitivity, setSkinSensitivity } = useClientStore()
  const [error, setError] = useState(false)
  const [sensitivityOpen, setSensitivityOpen] = useState(
    SKIN_SENSITIVITIES.NonSelected
  )

  const goToStep4 = () => {
    if (skinSensitivity === SKIN_SENSITIVITIES.NonSelected) {
      setError(true)

      return
    }

    router.push('/register/step4')
  }

  return (
    <RegisterLayout gotToNextStep={goToStep4}>
      <Text className='text-white text-3xl font-kiwi-maru-medium'>
        How much sensitivity does your skin have?
      </Text>
      <Text className='text-white font-kiwi-maru mt-4'>
        This will allow us to offer you more personalized recommendations.
      </Text>
      <View className='mt-5 flex flex-col gap-y-4'>
        {skinSensitivitiesEntries.map(([key, skinType], index) => {
          if (skinType === SKIN_SENSITIVITIES.NonSelected) return null

          return (
            <View
              key={key}
              className={cn(
                skinSensitivitiesEntries.length - 1 !== index
                  ? ''
                  : error
                    ? 'mb-1'
                    : 'mb-5'
              )}
            >
              <SkinSensitivityButton
                skinType={skinType}
                onPress={() => {
                  setSensitivityOpen(skinType)
                  setSkinSensitivity(skinType)
                  setError(false)
                }}
                className={cn(
                  skinSensitivity === skinType ? 'bg-purple-5' : ''
                )}
              />
              {skinType === sensitivityOpen && (
                <SkinSensitivityDescription skinType={skinType} />
              )}
            </View>
          )
        })}
      </View>
      {error && (
        <Text className='text-red-50 text-sm font-kiwi-maru'>
          Please select your skin type
        </Text>
      )}
    </RegisterLayout>
  )
}
