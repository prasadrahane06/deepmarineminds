import { StyleSheet, Text, View, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { UIThemedText } from "./UIThemedText";
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
        <UIThemedText type="header" style={part.style}>
          {part.text}
        </UIThemedText>
      ))}
    </View>
  );
};

export default UIHeaderText;

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 56,
    marginTop: 52,
  },
});
