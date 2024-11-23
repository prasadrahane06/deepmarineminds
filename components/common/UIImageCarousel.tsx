import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { Asset } from "expo-asset";
import UIImage from "./UIImage"; // Make sure this is the correct import for your UIImage component

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
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up auto-scrolling
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= categories.length ? 0 : nextIndex;
      });
    }, 4000); // Scroll every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * screenWidth,
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((item) => (
          <View key={item.id}>
            <UIImage path={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
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
  scrollViewContent: {},
});
