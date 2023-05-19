import { ImageBackground } from 'react-native'
import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen, Stack } from 'expo-router'
import * as SecureStore from 'expo-secure-store'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import { useEffect, useState } from 'react'

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [isUserAuth, setIsUserAuth] = useState<null | boolean>(null)

  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      setIsUserAuth(!!token)
    })
  }, [])

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
      >
        <Stack.Screen name="index" redirect={isUserAuth} />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  )
}
