import { cn } from '@/utils/misc'
import { ReactNode } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

type Props = {
  children: ReactNode
  className?: string
}

const BackgroundScrollView = (props: Props) => {
  const { children, className } = props

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" className={cn('bg-background px-[15.5%]', className)}>
      {children}
    </ScrollView>
  )
}

export { BackgroundScrollView }