import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-purple-900 items-center justify-center">
      <Text className="text-white text-xl">Hola</Text>
      <StatusBar style="auto" />
    </View>
  );
}