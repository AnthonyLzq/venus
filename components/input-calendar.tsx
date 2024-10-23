import { FC } from 'react'
import { Control, useController } from 'react-hook-form'
import DateTimePicker, { DateType } from 'react-native-ui-datepicker'

type InputCalendarProps = {
  name: string
  control: Control
  callback?: (date: DateType) => void
}

const InputCalendar: FC<InputCalendarProps> = props => {
  const { name, control, callback } = props
  const { field } = useController({
    name,
    defaultValue: null,
    control
  })

  return (
    <DateTimePicker
      mode='single'
      date={field.value}
      onChange={params => {
        field.onChange(params.date)

        if (callback) callback(params.date)
      }}
    />
  )
}

export { InputCalendar }
