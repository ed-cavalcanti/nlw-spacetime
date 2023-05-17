import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native'
import { styled } from 'nativewind'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

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
    <ImageBackground
      imageStyle={{
        position: 'absolute',
        left: '-100%',
      }}
      source={blurBg}
      className="relative flex-1 bg-gray-950"
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar style="auto" />
    </ImageBackground>
  )
}
