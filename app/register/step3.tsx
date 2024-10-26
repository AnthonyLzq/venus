import { Text, View } from 'react-native'

import { RegisterLayout } from '@/components/register-layout'

export default function Step3() {
  return (
    <RegisterLayout>
      <View className='flex-1 top-[7.5%]'>
        <Text className='text-white text-3xl font-kiwi-maru-medium'>
          Step 3!
        </Text>
      </View>
    </RegisterLayout>
  )
}
