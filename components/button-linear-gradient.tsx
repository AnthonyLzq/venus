import { FC, ReactNode } from 'react'
import { type GestureResponderEvent, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { cn } from '@/utils/misc'

type Props = {
  children?: ReactNode
  className?: string
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined
}

const ButtonLinearGradient: FC<Props> = props => {
  const { children, className, onPress } = props

  return (
    <Pressable
      onPress={onPress}
      className={cn('border border-purple-2 w-[57.5%] !h-[5.5%] rounded-2', className)}
    >
      <LinearGradient colors={['#6B009D', '#734BC5']}>
        {children}
      </LinearGradient>
    </Pressable>
  )
}

export { ButtonLinearGradient }
