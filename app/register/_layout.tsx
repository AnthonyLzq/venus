import { Stack } from 'expo-router/stack'
import { FC } from 'react'
import { View } from 'react-native'

import { extendedTheme } from '@/utils/extended-theme'
import { cn } from '@/utils/misc'

type Props = {
  route: {
    key: string
    name: string
    params?: Readonly<object | undefined>
  }
  children: string
  tintColor?: string
}

const STEPS = {
  step1: 'w-[25%]',
  step2: 'w-[50%]',
  step3: 'w-[75%]',
  step4: 'w-[100%]'
} as Record<string, string>

const LogoTitle: FC<Props> = props => {
  const { route } = props
  const width = STEPS[route.name] ?? 'w-3'

  return (
    <View className='bg-background'>
      <View className='w-[80vw] h-3 rounded-4 border border-purple-3'>
        <View
          className={cn('h-3 bg-white rounded-full mt-[-1px]', width)}
        ></View>
      </View>
    </View>
  )
}

export default function Layout() {
  return (
    <Stack
      initialRouteName='step1'
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: extendedTheme.colors.background
        },
        headerTitle: props => <LogoTitle route={route} {...props} />,
        headerShadowVisible: false,
        headerBackVisible: false,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center'
      })}
    >
      <Stack.Screen name='step1' options={{}} />
      <Stack.Screen name='step2' options={{}} />
      <Stack.Screen name='step3' options={{}} />
    </Stack>
  )
}
