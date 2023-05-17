import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="font-alt text-4xl text-gray-100">Spacetime</Text>
      <StatusBar style="auto" />
    </View>
  )
}
