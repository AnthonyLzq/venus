import { ReactNode } from 'react'
import { ScrollView } from 'react-native'

import { cn } from '@/utils/misc'

type Props = {
  children: ReactNode
  className?: string
}

const BackgroundScrollView = (props: Props) => {
  const { children, className } = props

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      className={cn('bg-background px-[15.5%]', className)}
    >
      {children}
    </ScrollView>
  )
}

export { BackgroundScrollView }
