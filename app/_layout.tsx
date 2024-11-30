import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import VUILoader from "@/components/common/VUILoader";
import { VUISplashScreen } from "@/components/common/VUISplashScreen";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Urbanist-Black": require(".././assets/fonts/static/Urbanist-Black.ttf"),
    "Urbanist-Bold": require(".././assets/fonts/static/Urbanist-Bold.ttf"),
  });
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  }, [loaded]);
  if (showSplash) {
    return <VUISplashScreen />;
  }
  if (!isReady) {
    return <VUILoader />;
  }
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
};
const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <InitialLayout />
      <Toast />
    </GestureHandlerRootView>
  );
};
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
export default RootLayoutNav;
