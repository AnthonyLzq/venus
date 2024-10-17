import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Step1() {
  return (
    <View className="flex-1 bg-[#56007E] justify-center px-[18.5%]">
      <Text className="text-white text-3xl font-kiwi-maru-medium">Step 2!</Text>
      <Link href="/" asChild>
        <Pressable
          className="bg-[#56007E] mt-8 h-10 w-full border border-[#62519D] rounded-xl items-center justify-center"
        >
          <Text className='text-white text-lg font-quattrocento-sans-bold'>
            Go home
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}