import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { Asset } from "expo-asset";

const VUIWaveProgressBar = () => {
  return (
    <View>
      <Image
        source={Asset.fromModule(
          require("@/assets/images/local/progresswave.png")
        )}
        style={{
          width: "100%",
          height: 12,
        }}
      />
    </View>
  );
};

export default VUIWaveProgressBar;
