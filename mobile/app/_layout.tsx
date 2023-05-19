import { ImageBackground } from 'react-native'
import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen, Stack } from 'expo-router'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadFonts) {
    return <SplashScreen />
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

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
    </ImageBackground>
  )
}
