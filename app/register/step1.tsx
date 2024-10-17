import { Link } from 'expo-router';
import { Pressable, Text, View, TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Step1() {
  return (
    <View className="flex-1 gap-y-1 bg-[#56007E] justify-center px-[18.5%]">
      <Text className="text-white text-3xl font-kiwi-maru-medium">Tell us about you</Text>
      <Text className="text-white font-kiwi-maru mt-2">Fill in the following with your basic information</Text>
      <View>
        <View>
          <Text className="text-white mt-4 ml-2 px-1 bg-[#56007E] z-10 w-16 text-xs font-kiwi-maru">Full Name</Text>
          <TextInput className="-mt-2 px-4 py-1.5 border border-[#62519D] rounded-xl text-white" placeholder="Name, Last Name" defaultValue='Name, Last Name' />
        </View>
        <View>
          <Text className="text-white mt-4 ml-2.5 px-1 bg-[#56007E] z-10 w-8 text-xs font-kiwi-maru">Age</Text>
          <View className='flex-row items-center justify-between px-4 -mt-2 py-1.5 border border-[#62519D] rounded-xl'>
            <TextInput className=" text-white" keyboardType='numeric' defaultValue='05/11/2000' />
            <Svg width={20} height={20} viewBox="0 0 24 28" fill="none">
              <Path d="M22.9091 2.54545H21.6364V0H19.0909V2.54545H6.36364V0H3.81818V2.54545H2.54545C1.14545 2.54545 0 3.69091 0 5.09091V25.4545C0 26.8545 1.14545 28 2.54545 28H22.9091C24.3091 28 25.4545 26.8545 25.4545 25.4545V5.09091C25.4545 3.69091 24.3091 2.54545 22.9091 2.54545ZM22.9091 25.4545H2.54545V11.4545H22.9091V25.4545ZM22.9091 8.90909H2.54545V5.09091H22.9091V8.90909Z" fill="#D6D6D6" />
            </Svg>
          </View>
        </View>
        <View>
          <Text className="text-white mt-4 ml-2 px-1 bg-[#56007E] z-10 w-12 text-xs font-kiwi-maru">Gender</Text>
          <View className='-mt-2 px-4 py-4 border border-[#62519D] rounded-xl flex-row justify-between'>
            <Pressable>
              <View className='p-2 rounded-lg bg-[#34004C]'>
                <Svg width="40" height="40" strokeWidth='4' viewBox="0 0 62 62" fill="none">
                  <Path d="M25.8801 48.9198C32.9493 48.9198 38.6801 43.1891 38.6801 36.1198C38.6801 29.0506 32.9493 23.3198 25.8801 23.3198C18.8108 23.3198 13.0801 29.0506 13.0801 36.1198C13.0801 43.1891 18.8108 48.9198 25.8801 48.9198Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M48.9199 13.0796L35.0959 26.9036" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M48.92 13.0796H36.12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M48.92 13.0796V25.8796" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </Svg>
              </View>
              <Text className='text-white text-center pt-1 text-xs'>Male</Text>
            </Pressable>
            <Pressable>
              <View className='p-2 rounded-lg bg-[#34004C]'>
                <Svg width="40" height="40" viewBox="0 0 62 62" fill="none" strokeWidth='4'>
                  <Path d="M31 36.12C38.0692 36.12 43.7999 30.3893 43.7999 23.32C43.7999 16.2508 38.0692 10.52 31 10.52C23.9307 10.52 18.2 16.2508 18.2 23.32C18.2 30.3893 23.9307 36.12 31 36.12Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M31 36.1201V54.0401" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M23.3201 46.3599H38.6801" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </Svg>
              </View>
              <Text className='text-white text-center pt-1 text-xs'>Female</Text>
            </Pressable>
            <Pressable>
              <View className='p-2 rounded-lg bg-[#34004C]'>
                <Svg width="40" height="40" viewBox="0 0 62 62" fill="none" strokeWidth='4'>
                  <Path d="M31 25.8795C23.9308 25.8795 18.2001 31.6102 18.2001 38.6795C18.2001 45.7487 23.9308 51.4795 31 51.4795C38.0693 51.4795 43.8 45.7487 43.8 38.6795C43.8 31.6102 38.0693 25.8795 31 25.8795Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M31 25.8794L31 7.95939" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M37.1244 19L25 12" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <Path d="M25 19L37.1244 12" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </Svg>
              </View>
              <Text className='text-white text-center pt-1 text-xs'>Non binary</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Link href="/" asChild>
        <Pressable
          className="bg-[#56007E] mt-8 h-10 w-full border border-[#62519D] rounded-xl items-center justify-center"
        >
          <Text className='text-white text-lg font-quattrocento-sans-bold'>
            Continue
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}