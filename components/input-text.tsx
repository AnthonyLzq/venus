import { FC } from 'react'
import { Control, useController } from 'react-hook-form'
import { TextInput } from 'react-native'

import { cn } from '@/utils/misc'

type InputProps = {
  name: string
  control: Control
  value?: string
  className?: string
  placeHolder?: string
}

const InputText: FC<InputProps> = props => {
  const { name, control, value, className, placeHolder } = props
  const { field } = useController({
    name,
    defaultValue: value,
    control
  })

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      className={cn('text-white placeholder:text-white', className)}
      placeholder={placeHolder}
    />
  )
}

export { InputText }
