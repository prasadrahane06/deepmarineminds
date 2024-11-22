import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { TEXT_THEME } from "@/constants/Colors";
import { buttonStyle } from "@/constants/Styles";

interface CustomButtonProps {
  style?: object;
  onPress: () => void;
  disabled?: boolean;
  background: string;
  title: string;
}

const UIButton: React.FC<CustomButtonProps> = ({
  style,
  onPress,
  disabled = false,
  background,
  title,
}) => {
  const buttonOpacity = disabled ? 0.5 : 1;
  const textOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      style={[
        buttonStyle.button,
        style,
        { backgroundColor: background, opacity: buttonOpacity },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          buttonStyle.buttonText,
          { color: TEXT_THEME.primary, opacity: textOpacity },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default UIButton;
