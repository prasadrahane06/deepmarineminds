import { StyleSheet, Text, View, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { VUIThemedText } from "./VUIThemedText";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface CustomHeaderTextProps {
  textParts: { text: string; style?: TextStyle }[];
  containerStyle?: ViewStyle;
}
const VUIHeaderText: React.FC<CustomHeaderTextProps> = ({
  textParts,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {textParts.map((part, index) => (
        <VUIThemedText type="header" style={part.style} key={index}>
          {part.text}
        </VUIThemedText>
      ))}
    </View>
  );
};

export default VUIHeaderText;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginLeft: 24,
  },
});
