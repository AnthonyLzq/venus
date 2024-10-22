import dayjs from 'dayjs'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Text, View, Pressable, Modal, StyleSheet } from 'react-native'
import { DateType } from 'react-native-ui-datepicker'

import { ButtonLinearGradient } from '@/components/button-linear-gradient'
import { InputCalendar } from '@/components/input-calendar'
import { InputText } from '@/components/input-text'
import { RegisterLayout } from '@/components/register-layout'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from '@/icons/calendar'
import { FemaleIcon } from '@/icons/female'
import { MaleIcon } from '@/icons/male'
import { NonBinaryIcon } from '@/icons/non-binary'
import { useClientStore } from '@/store/register'
import { GENDERS } from '@/utils/constants'
import { cn } from '@/utils/misc'

export default function Step1() {
  const router = useRouter()
  const { control, handleSubmit } = useForm()
  const { fullName, setFullName, birthday, setBirthday, gender, setGender } =
    useClientStore()

  const [modalVisible, setModalVisible] = useState(false)
  const [date, setDate] = useState<DateType>(birthday || null)
  const formatDate = birthday
    ? birthday
    : date
      ? dayjs(date).format('DD/MM/YYYY')
      : 'DD/MM/YYYY'

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const goToStep2 = (values: FieldValues) => {
    setBirthday(formatDate)
    setFullName(values.fullName)
    router.push('/register/step2')
  }

  return (
    <RegisterLayout>
      <Text className='text-white text-3xl font-kiwi-maru-medium'>
        Tell us about you
      </Text>
      <Text className='text-white font-kiwi-maru mt-2'>
        Fill in the following with your basic information
      </Text>
      <View>
        <View>
          <View className='z-10 self-start mt-4 ml-2 bg-background'>
            <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
              Full Name
            </Text>
          </View>
          <View className='flex-row items-center justify-between px-4 -mt-2 py-2 border border-purple-3 rounded-2'>
            <InputText
              name='fullName'
              control={control}
              value={fullName}
              placeHolder='Name, Last Name'
            />
          </View>
        </View>
        <View>
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <InputCalendar
                  name='birthday'
                  control={control}
                  callback={date => setDate(date)}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => closeModal()}
                >
                  <Text style={styles.textStyle}>Done!</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View className='z-10 self-start mt-4 ml-2 bg-background'>
            <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
              Birthday
            </Text>
          </View>
          <Pressable
            className='flex-row items-center justify-between px-4 -mt-2 py-2 border border-purple-3 rounded-2'
            onPress={() => openModal()}
          >
            <Text className='text-white placeholder:text-white'>
              {birthday || formatDate}
            </Text>
            <CalendarIcon />
          </Pressable>
        </View>
        <View>
          <View className='z-10 self-start mt-4 ml-2 bg-background'>
            <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
              Gender
            </Text>
          </View>
          <View className='-mt-2 px-2 py-2 border border-purple-3 rounded-2 flex-row justify-between'>
            <Button
              onPress={() => setGender(GENDERS.Male)}
              variant='transparent'
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
        </View>
      </View>
      <ButtonLinearGradient
        onPress={handleSubmit(goToStep2)}
        className='mt-[15.3%] mb-[11.3%] self-center'
      >
        <View className='flex flex-1 items-center justify-center'>
          <Text className='text-white text-lg font-quattrocento-sans-bold'>
            Continue
          </Text>
        </View>
      </ButtonLinearGradient>
    </RegisterLayout>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})
