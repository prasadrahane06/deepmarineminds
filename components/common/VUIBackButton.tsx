import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Asset } from "expo-asset";
import { Image } from "expo-image";

// Create BackButton component without animation
type BackButtonProps = {
  onPress: () => void; // Define the onPress prop type
};

const VUIBackButton = ({ onPress }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={Asset.fromModule(
          require("@/assets/images/local/arrow-left.png")
        )}
        style={{ width: 24, height: 24 }}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
});

export default VUIBackButton;
