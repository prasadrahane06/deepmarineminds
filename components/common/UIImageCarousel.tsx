// import React, { useEffect, useRef, useState } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   Dimensions,
//   Animated,
// } from "react-native";
// import { Asset } from "expo-asset";
// import UIImage from "./UIImage"; // Ensure this is correctly imported

// const screenWidth = Dimensions.get("window").width;

// const categories = [
//   {
//     id: "1",
//     image: Asset.fromModule(require("@/assets/images/local/card1.png")),
//   },
//   {
//     id: "2",
//     image: Asset.fromModule(require("@/assets/images/local/card2.png")),
//   },
// ];

// const UIImageCarousel = () => {
//   const scrollViewRef = useRef<ScrollView>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const animatedValues = useRef(
//     categories.map(() => new Animated.Value(8))
//   ).current;

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = prevIndex + 1;
//         return nextIndex >= categories.length ? 0 : nextIndex;
//       });
//     }, 2000);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   useEffect(() => {
//     animatedValues.forEach((value, index) => {
//       Animated.timing(value, {
//         toValue: index === currentIndex ? 59 : 8,
//         duration: 600,
//         useNativeDriver: false,
//       }).start();
//     });

//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({
//         x: currentIndex * screenWidth,
//         animated: true,
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollViewContent}
//       >
//         {categories.map((item) => (
//           <View key={item.id}>
//             <UIImage path={item.image} />
//           </View>
//         ))}
//       </ScrollView>
//       <View style={styles.dotsContainer}>
//         {categories.map((_, index) => {
//           const dotBackgroundColor = animatedValues[index].interpolate({
//             inputRange: [8, 59],
//             outputRange: ["#FFFFFF", "#FFED89"],
//           });

//           const dotOpacity = animatedValues[index].interpolate({
//             inputRange: [8, 59],
//             outputRange: [0.6, 1], // Opacity is 0.6 for inactive dots, 1 for active dots
//           });

//           return (
//             <Animated.View
//               key={index}
//               style={[
//                 styles.dot,
//                 {
//                   width: animatedValues[index],
//                   backgroundColor: dotBackgroundColor,
//                   opacity: dotOpacity, // Animated opacity
//                 },
//               ]}
//             />
//           );
//         })}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default UIImageCarousel;

// const styles = StyleSheet.create({
//   container: {
//     width: 312,
//     height: 408,
//     marginTop: 60,
//   },
//   scrollViewContent: {
//     gap: 20,
//   },
//   dotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     gap: 12,
//   },
//   dot: {
//     height: 8,
//     borderRadius: 100,
//   },
// });

import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { Asset } from "expo-asset";
import UIImage from "./UIImage"; // Ensure this is correctly imported

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

const UIImageCarousel = () => {
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
            <UIImage path={item.image} />
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

export default UIImageCarousel;

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 408,
    marginTop: 60,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  dot: {
    height: 8,
    borderRadius: 100,
  },
});
