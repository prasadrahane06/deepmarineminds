import { StyleSheet, Text, View, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { UIThemedText } from "./UIThemedText";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface CustomHeaderTextProps {
  textParts: { text: string; style?: TextStyle }[];
  containerStyle?: ViewStyle;
}
const UIHeaderText: React.FC<CustomHeaderTextProps> = ({
  textParts,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {textParts.map((part, index) => (
        <UIThemedText type="header" style={part.style} key={index}>
          {part.text}
        </UIThemedText>
      ))}
    </View>
  );
};

export default UIHeaderText;

const styles = StyleSheet.create({
  container: {
    marginTop: hp("3%"),
    marginLeft: wp("6.4%"),
  },
});
