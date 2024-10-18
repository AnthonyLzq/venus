import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import { BackgroundView } from '@/components/background-view';

export default function HomeScreen() {
  return (
    <BackgroundView>
      <Text className="text-white text-3xl font-kiwi-maru-medium">Hello there!</Text>
      <Text className="text-white text-base font-kiwi-maru pt-2">Would you like to start now?</Text>
      <Link href="/register/step1" asChild>
        <Pressable
          className="bg-purple-1 mt-8 h-9 w-full border border-purple-2 rounded-xl items-center justify-center"
        >
          <Text className='text-white text-lg font-quattrocento-sans-bold'>
            Sure!
          </Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </BackgroundView>
  );
}