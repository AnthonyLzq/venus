import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#56007E] justify-center px-[18.5%]">
      <Text className="text-white text-3xl font-kiwi-maru-medium">Hello there!</Text>
      <Text className="text-white text-base font-kiwi-maru pt-2">Would you like to start now?</Text>
      <Link href="/register/step1" asChild>
        <Pressable
          className="bg-[#56007E] mt-8 h-10 w-full border border-[#62519D] rounded-xl items-center justify-center"
        >
          <Text className='text-white text-lg font-quattrocento-sans-bold'>
            Sure!
          </Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}