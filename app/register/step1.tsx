import dayjs from 'dayjs'
import { useRouter } from 'expo-router'
import { startTransition, useState } from 'react'
import { Text, View, Pressable, Modal, TextInput } from 'react-native'
import DateTimePicker, { DateType } from 'react-native-ui-datepicker'

import { ButtonLinearGradient } from '@/components/button-linear-gradient'
import { RegisterLayout } from '@/components/register-layout'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from '@/icons/calendar'
import { FemaleIcon } from '@/icons/female'
import { MaleIcon } from '@/icons/male'
import { NonBinaryIcon } from '@/icons/non-binary'
import { useClientStore } from '@/store/register'
import { GENDERS } from '@/utils/constants'
import { extendedTheme } from '@/utils/extended-theme'
import { cn } from '@/utils/misc'

const DATE_FORMAT = 'DD/MM/YYYY'

export default function Step1() {
  const router = useRouter()
  const { fullName, setFullName, birthday, setBirthday, gender, setGender } =
    useClientStore()

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    birthday: false,
    gender: false
  })
  const [modalVisible, setModalVisible] = useState(false)
  const [date, setDate] = useState<DateType>(birthday || null)
  const formatDate = birthday
    ? birthday
    : date
      ? dayjs(date).format(DATE_FORMAT)
      : DATE_FORMAT

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const goToStep2 = () => {
    startTransition(() => {
      if (birthday && birthday !== DATE_FORMAT) setBirthday(formatDate)

      setFullName(fullName)
    })

    if (
      fullName === '' ||
      !formatDate ||
      formatDate === DATE_FORMAT ||
      gender === GENDERS.NonSelected
    ) {
      setFormErrors({
        fullName: fullName === '',
        birthday: !formatDate || formatDate === DATE_FORMAT,
        gender: gender === GENDERS.NonSelected
      })

      return
    }

    router.push('/register/step2')
  }

  return (
    <RegisterLayout>
      <View className='h-[80vh] flex-1 justify-between pt-[7.5%]'>
        <View>
          <Text className='text-white text-3xl font-kiwi-maru-medium'>
            Tell us about you
          </Text>
          <Text className='text-white font-kiwi-maru mt-2 pb-2'>
            Fill in the following with your basic information
          </Text>
          <View className='mt-4'>
            <View className={cn('mb-5', formErrors.fullName ? 'mb-1' : '')}>
              <View className='z-10 self-start ml-2 bg-background'>
                <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
                  Full Name
                </Text>
              </View>
              <View className='flex-row items-center justify-between px-4 -mt-2 py-2 border border-purple-3 rounded-2'>
                <TextInput
                  value={fullName}
                  placeholder='Name, Last Name'
                  onChangeText={text => {
                    setFullName(text)
                    setFormErrors({ ...formErrors, fullName: !text })
                  }}
                  className={'text-white placeholder:text-white'}
                />
              </View>
              {formErrors.fullName && (
                <Text className='mt-1 mb-2 text-red-50 text-sm font-kiwi-maru'>
                  Please enter your full name
                </Text>
              )}
            </View>

            <View className={cn('mb-5', formErrors.birthday ? 'mb-1' : '')}>
              <View className='z-10 self-start ml-2 bg-background'>
                <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
                  Birthday
                </Text>
              </View>
              <Pressable
                className='flex-row items-center justify-between px-4 -mt-2 py-3 border border-purple-3 rounded-2'
                onPress={() => openModal()}
              >
                <Text className='text-white placeholder:text-white'>
                  {birthday || formatDate}
                </Text>
                <CalendarIcon />
              </Pressable>
              <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
              >
                <View className='flex-1 justify-center items-center mt-5'>
                  <View
                    className='m-4 bg-white rounded-6 p-6 items-center shadow-black shadow-calendar'
                    style={{ elevation: 5 }}
                  >
                    <DateTimePicker
                      mode='single'
                      date={date}
                      onChange={params => {
                        setDate(params.date)
                        setFormErrors({ ...formErrors, birthday: false })
                      }}
                      maxDate={new Date()}
                      selectedItemColor={extendedTheme.colors.purple[2]}
                    />
                    <Button
                      variant='transparent'
                      size='lg'
                      onPress={() => {
                        closeModal()
                      }}
                    >
                      <Text className='text-white font-quattrocento-sans-bold'>
                        Done!
                      </Text>
                    </Button>
                  </View>
                </View>
              </Modal>
              {formErrors.birthday && (
                <Text className='mt-1 mb-2 text-red-50 text-sm font-kiwi-maru'>
                  Please enter your birthday
                </Text>
              )}
            </View>

            <View className={cn('mb-5', formErrors.gender ? 'mb-1' : '')}>
              <View className='z-10 self-start ml-2 bg-background'>
                <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
                  Gender
                </Text>
              </View>
              <View className='-mt-2 px-2 py-2 border border-purple-3 rounded-2 flex-row justify-between'>
                <Button
                  onPress={() => {
                    setGender(GENDERS.Male)
                    setFormErrors({ ...formErrors, gender: false })
                  }}
                  variant='transparent'
                  size='md'
                  className='flex-col p-2'
                >
                  <View
                    className={cn(
                      'p-2 rounded-lg bg-purple-4',
                      gender === GENDERS.Male && 'bg-purple-5'
                    )}
                  >
                    <MaleIcon />
                  </View>
                  <Text className='text-white text-center pt-1 text-xs'>
                    {GENDERS.Male}
                  </Text>
                </Button>
                <Button
                  onPress={() => setGender(GENDERS.Female)}
                  variant='transparent'
                  size='md'
                  className='flex-col p-2'
                >
                  <View
                    className={cn(
                      'p-2 rounded-lg bg-purple-4',
                      gender === GENDERS.Female && 'bg-purple-5'
                    )}
                  >
                    <FemaleIcon />
                  </View>
                  <Text className='text-white text-center pt-1 text-xs'>
                    {GENDERS.Female}
                  </Text>
                </Button>
                <Button
                  onPress={() => setGender(GENDERS.NonBinary)}
                  variant='transparent'
                  size='md'
                  className='flex-col p-2'
                >
                  <View
                    className={cn(
                      'p-2 rounded-lg bg-purple-4',
                      gender === GENDERS.NonBinary && 'bg-purple-5'
                    )}
                  >
                    <NonBinaryIcon />
                  </View>
                  <Text className='text-white text-center pt-1 text-xs'>
                    {GENDERS.NonBinary}
                  </Text>
                </Button>
              </View>
              {formErrors.gender && (
                <Text className='mt-1 text-red-50 text-sm font-kiwi-maru'>
                  Please select your gender
                </Text>
              )}
            </View>
          </View>
        </View>
        <ButtonLinearGradient
          onPress={goToStep2}
          className='self-center bottom-[11.3%]'
        >
          <View className='flex flex-1 items-center justify-center'>
            <Text className='text-white text-lg font-quattrocento-sans-bold'>
              Continue
            </Text>
          </View>
        </ButtonLinearGradient>
      </View>
    </RegisterLayout>
  )
}
