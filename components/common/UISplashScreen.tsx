import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, Easing } from "react-native";
import { UISafeAreaView } from "./UISafeAreaView";
import { UIThemedView } from "./UIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { Asset } from "expo-asset";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import UIImage from "./UIImage";
import { UNIVERSAL_TEXT } from "@/constants/Properties";

const UISplashScreen = () => {
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
    <UISafeAreaView>
      <UIThemedView style={initialPageStyles.container}>
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
            style={{ width: wp("54%"), height: hp("25%") }}
          />
          <Image
            source={Asset.fromModule(
              require("@/assets/images/local/splaswave2.png")
            )}
            style={{ width: wp("54%"), height: hp("25%") }}
          />
        </Animated.View>

        <Animated.View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: wp("5%"),
            marginTop: hp("5%"),
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <UIImage
            path={Asset.fromModule(require("@/assets/images/local/logo.png"))}
            icon
          />
          <Text
            style={{
              color: "#FFED89",
              opacity: 0.9,
              fontSize: wp("6%"),
              fontWeight: "700",
              fontFamily: "Urbanist-Black",
              marginTop: hp("2.3%"),
            }}
          >
            {UNIVERSAL_TEXT.deep_marine_mind}
          </Text>
        </Animated.View>
      </UIThemedView>
    </UISafeAreaView>
  );
};

export default UISplashScreen;
