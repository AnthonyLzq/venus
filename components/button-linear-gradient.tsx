import { LinearGradient } from 'expo-linear-gradient'
import { FC, ReactNode } from 'react'
import {
  Dimensions,
  type GestureResponderEvent,
  Pressable,
  View
} from 'react-native'

import { cn } from '@/utils/misc'

type Props = {
  children?: ReactNode
  className?: string
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined
}

const ButtonLinearGradient: FC<Props> = props => {
  const { children, className, onPress } = props
  const height = Dimensions.get('window').height
  const buttonHeight = height * 0.053

  return (
    <View className={cn('w-[57.5%] rounded-6', className)}>
      <Pressable
        onPress={onPress}
        className='border border-purple-2 rounded-6 overflow-hidden'
      >
        <LinearGradient
          style={{ height: buttonHeight }}
          colors={['#6B009D', '#734BC5']}
        >
          {children}
        </LinearGradient>
      </Pressable>
    </View>
  )
}

export { ButtonLinearGradient }
