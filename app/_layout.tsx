/* eslint-disable @typescript-eslint/no-require-imports */
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import '../global.css'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    KiwiMaru: require('../assets/fonts/KiwiMaru-Regular.ttf'),
    KiwiMaruMedium: require('../assets/fonts/KiwiMaru-Medium.ttf'),
    QuattrocentoSansBold: require('../assets/fonts/QuattrocentoSans-Bold.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='+not-found' />
    </Stack>
  )
}
