import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Asset } from "expo-asset";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Create BackButton component without animation
type BackButtonProps = {
  onPress: () => void; // Define the onPress prop type
};

const VUIBackButton = ({ onPress }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={Asset.fromModule(require("@/assets/images/local/arrow-left.png"))}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp("6%"),
    height: hp("2.4%"),
    marginTop: hp("2%"),
    marginLeft: wp("6.4%"),
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default VUIBackButton;
