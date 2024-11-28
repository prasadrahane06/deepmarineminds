import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Asset } from "expo-asset";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const VUIWaveProgressBar = () => {
  return (
    <View>
      <Image
        source={Asset.fromModule(
          require("@/assets/images/local/progresswave.png")
        )}
        style={{
          width: wp("87%"),
          height: hp("1.5%"),
          marginTop: hp("3%"),
          marginLeft: wp("6.4%"),
        }}
      />
    </View>
  );
};

export default VUIWaveProgressBar;
