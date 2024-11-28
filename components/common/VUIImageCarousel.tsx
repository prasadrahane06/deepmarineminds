import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Asset } from "expo-asset";
import VUIImage from "./VUIImage"; // Ensure this is correctly imported

const screenWidth = Dimensions.get("window").width;

const categories = [
  {
    id: "1",
    image: Asset.fromModule(require("@/assets/images/local/card1.png")),
  },
  {
    id: "2",
    image: Asset.fromModule(require("@/assets/images/local/card2.png")),
  },
];

const VUIImageCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      Animated.timing(scrollX, {
        toValue:
          ((Math.floor(scrollX._value / screenWidth) + 1) % categories.length) *
          screenWidth,
        duration: 700, // Slower duration for sliding
        useNativeDriver: false,
      }).start();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(scrollInterval);
  }, [scrollX]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        contentOffset={{ x: scrollX, y: 0 }} // Drives the smooth scrolling
      >
        {categories.map((item) => (
          <View key={item.id} style={{ width: screenWidth }}>
            <VUIImage path={item.image} />
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.dotsContainer}>
        {categories.map((_, index) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            outputRange: [8, 59, 8],
            extrapolate: "clamp",
          });

          const dotColor = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            outputRange: ["#FFFFFF", "#FFED89", "#FFFFFF"],
            extrapolate: "clamp",
          });

          const dotOpacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            outputRange: [0.6, 1, 0.6],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  backgroundColor: dotColor,
                  opacity: dotOpacity,
                },
              ]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default VUIImageCarousel;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("55%"),
    marginTop: hp("6%"),
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp("3%"),
  },
  dot: {
    width: wp("2%"),
    height: wp("2%"),
    borderRadius: wp("1%"),
  },
});
