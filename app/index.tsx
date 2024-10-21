import { useRouter } from 'expo-router'
import { Text } from 'react-native'

import { BackgroundView } from '@/components/background-view'
import { Button } from '@/components/ui/button'

export default function HomeScreen() {
  const router = useRouter()

  const goToRegister = () => {
    router.push('/register/step1')
  }

  return (
    <BackgroundView>
      <Text className='text-white text-3xl font-kiwi-maru-medium'>
        Hello there!
      </Text>
      <Text className='text-white text-base font-kiwi-maru pt-2'>
        Would you like to start now?
      </Text>
      <Button onPress={goToRegister} className='mt-8 self-center w-full'>
        <Text className='text-white text-lg font-quattrocento-sans-bold'>
          Sure!
        </Text>
      </Button>
    </BackgroundView>
  )
}
