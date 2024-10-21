import { useRef, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  StyleSheet
} from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { useRouter } from 'expo-router'
import DateTimePicker, { DateType } from 'react-native-ui-datepicker'
import dayjs from 'dayjs'

import { RegisterLayout } from '@/components/register-layout'
import { Button } from '@/components/ui/button'
import { ButtonLinearGradient } from '@/components/button-linear-gradient'
import { useClientStore } from '@/store/register'

export default function Step1() {
  const router = useRouter()
  const { fullName, setFullName, birthday, setBirthday } = useClientStore()

  const firstRender = useRef(true)

  const [modalVisible, setModalVisible] = useState(false)
  const [date, setDate] = useState<DateType>(birthday || dayjs())
  const formatDate = firstRender.current
    ? 'DD/MM/YYYY'
    : dayjs(date).format('DD/MM/YYYY')

  const openModal = () => {
    if (firstRender.current) firstRender.current = false

    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const goToStep2 = () => {
    setBirthday(formatDate)
    setFullName(fullName)
    // router.push('/register/step2')
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
            <TextInput
              className='text-white placeholder:text-white'
              placeholder='Name, Last Name'
              value={fullName}
              onChangeText={text => setFullName(text)}
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
                <DateTimePicker
                  mode='single'
                  date={date}
                  onChange={params => {
                    setDate(params.date)
                  }}
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
              {birthday}
            </Text>
            <Svg width={20} height={20} viewBox='0 0 24 28' fill='none'>
              <Path
                d='M22.9091 2.54545H21.6364V0H19.0909V2.54545H6.36364V0H3.81818V2.54545H2.54545C1.14545 2.54545 0 3.69091 0 5.09091V25.4545C0 26.8545 1.14545 28 2.54545 28H22.9091C24.3091 28 25.4545 26.8545 25.4545 25.4545V5.09091C25.4545 3.69091 24.3091 2.54545 22.9091 2.54545ZM22.9091 25.4545H2.54545V11.4545H22.9091V25.4545ZM22.9091 8.90909H2.54545V5.09091H22.9091V8.90909Z'
                fill='#D6D6D6'
              />
            </Svg>
          </Pressable>
        </View>
        <View>
          <View className='z-10 self-start mt-4 ml-2 bg-background'>
            <Text className='text-purple-3 px-1.5 text-xs font-kiwi-maru'>
              Gender
            </Text>
          </View>
          <View className='-mt-2 px-2 py-2 border border-purple-3 rounded-2 flex-row justify-between'>
            <Button variant='transparent' className='flex-col p-2'>
              <View className='p-2 rounded-lg bg-[#34004C]'>
                <Svg
                  width='40'
                  height='40'
                  strokeWidth='4'
                  viewBox='0 0 62 62'
                  fill='none'
                >
                  <Path
                    d='M25.8801 48.9198C32.9493 48.9198 38.6801 43.1891 38.6801 36.1198C38.6801 29.0506 32.9493 23.3198 25.8801 23.3198C18.8108 23.3198 13.0801 29.0506 13.0801 36.1198C13.0801 43.1891 18.8108 48.9198 25.8801 48.9198Z'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M48.9199 13.0796L35.0959 26.9036'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M48.92 13.0796H36.12'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M48.92 13.0796V25.8796'
                    stroke='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </Svg>
              </View>
              <Text className='text-white text-center pt-1 text-xs'>Male</Text>
            </Button>
            <Button variant='transparent' className='flex-col p-2'>
              <View className='p-2 rounded-lg bg-[#34004C]'>
                <Svg
                  width='40'
                  height='40'
                  viewBox='0 0 62 62'
                  fill='none'
                  strokeWidth='4'
                >
                  <Path
                    d='M31 36.12C38.0692 36.12 43.7999 30.3893 43.7999 23.32C43.7999 16.2508 38.0692 10.52 31 10.52C23.9307 10.52 18.2 16.2508 18.2 23.32C18.2 30.3893 23.9307 36.12 31 36.12Z'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M31 36.1201V54.0401'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M23.3201 46.3599H38.6801'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </Svg>
              </View>
              <Text className='text-white text-center pt-1 text-xs'>
                Female
              </Text>
            </Button>
            <Button variant='transparent' className='flex-col p-2'>
              <View className='p-2 rounded-lg bg-[#34004C]'>
                <Svg
                  width='40'
                  height='40'
                  viewBox='0 0 62 62'
                  fill='none'
                  strokeWidth='4'
                >
                  <Path
                    d='M31 25.8795C23.9308 25.8795 18.2001 31.6102 18.2001 38.6795C18.2001 45.7487 23.9308 51.4795 31 51.4795C38.0693 51.4795 43.8 45.7487 43.8 38.6795C43.8 31.6102 38.0693 25.8795 31 25.8795Z'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M31 25.8794L31 7.95939'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M37.1244 19L25 12'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <Path
                    d='M25 19L37.1244 12'
                    stroke='white'
                    stroke-width='4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </Svg>
              </View>
              <Text className='text-white text-center pt-1 text-xs'>
                Non binary
              </Text>
            </Button>
          </View>
        </View>
      </View>
      <ButtonLinearGradient
        onPress={goToStep2}
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
