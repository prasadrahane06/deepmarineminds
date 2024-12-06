import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { VUISafeAreaView } from "./VUISafeAreaView";
import { VUIThemedView } from "./VUIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { Asset } from "expo-asset";
import { Image } from "expo-image";

import VUIImage from "./VUIImage";
import { UNIVERSAL_TEXT } from "@/constants/Properties";

export const VUISplashScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // For opacity animation
  const slideAnim = useRef(new Animated.Value(50)).current; // For sliding animation

  useEffect(() => {
    // Start animation when the component is mounted
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1, // Fully visible
        duration: 300, // 300ms duration
        easing: Easing.ease, // Ease-out curve
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000, // 300ms duration
        easing: Easing.out(Easing.ease), // Ease-out curve
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <VUISafeAreaView>
      <VUIThemedView style={initialPageStyles.container}>
        <Animated.View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <Image
            source={Asset.fromModule(
              require("@/assets/images/local/splaswave1.png")
            )}
            style={{ width: "50%", height: 300, opacity: 0.3 }}
          />
          <Image
            source={Asset.fromModule(
              require("@/assets/images/local/splaswave2.png")
            )}
            style={{ width: "50%", height: 300, opacity: 0.3 }}
          />
        </Animated.View>

        <Animated.View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <Image
            source={Asset.fromModule(require("@/assets/images/local/logo.png"))}
            style={{ width: 140, height: 140 }}
            contentFit="contain"
          />
          <Text
            style={{
              color: "#FFED89",
              opacity: 0.9,
              fontSize: 24,
              fontWeight: "700",
              fontFamily: "Urbanist-Bold",
              marginTop: 48,
            }}
          >
            {UNIVERSAL_TEXT.deep_marine_mind}
          </Text>
        </Animated.View>
      </VUIThemedView>
    </VUISafeAreaView>
  );
};
