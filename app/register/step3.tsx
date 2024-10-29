import { Text } from 'react-native'

import { RegisterLayout } from '@/components/register-layout'

export default function Step3() {
  return (
    <RegisterLayout>
      <Text className='text-white text-3xl font-kiwi-maru-medium'>
        How much sensitivity does your skin have?
      </Text>
      <Text className='text-white font-kiwi-maru mt-4'>
        This will allow us to offer you more personalized recommendations.
      </Text>
    </RegisterLayout>
  )
}
