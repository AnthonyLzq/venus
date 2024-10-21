import { FC, ReactNode } from 'react'
import { Dimensions, type GestureResponderEvent, Pressable, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
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
    <View
      className={cn(
        'w-[57.5%] rounded-6',
        `!h-${buttonHeight}px`,
        className
      )}
    >
      <Pressable
        onPress={onPress}
        className={'flex-1 border border-purple-2 rounded-6 overflow-hidden'}
      >
        <LinearGradient colors={['#6B009D', '#734BC5']}>
          {children}
        </LinearGradient>
      </Pressable>
    </View>
  )
}

export { ButtonLinearGradient }
