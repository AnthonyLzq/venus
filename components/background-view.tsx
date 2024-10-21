import { ReactNode } from 'react'
import { View } from 'react-native'

import { cn } from '@/utils/misc'

type Props = {
  children: ReactNode
  className?: string
}

const BackgroundView = (props: Props) => {
  const { children, className } = props

  return (
    <View
      className={cn(
        'flex-1 bg-background justify-center px-[15.5%]',
        className
      )}
    >
      {children}
    </View>
  )
}

export { BackgroundView }
