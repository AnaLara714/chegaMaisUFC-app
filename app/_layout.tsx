import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
    }).then(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  SplashScreen.hideAsync();

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="roomDetails" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
