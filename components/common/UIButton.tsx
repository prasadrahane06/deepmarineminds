import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { APP_THEME, BACKGROUND_THEME, TEXT_THEME } from "@/constants/Colors";
import { buttonStyle } from "@/constants/Styles";
import { UIThemedText } from "./UIThemedText";
import UILoader from "./UILoader";

interface CustomButtonProps {
  style?: object;
  onPress: () => void;
  disabled?: boolean;
  background: string;
  title: string;
  loadingDuration?: number;
}

const UIButton: React.FC<CustomButtonProps> = ({
  style,
  onPress,
  disabled = false,
  background,
  title,
  loadingDuration = 2000,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const handlePress = () => {
    setButtonPressed(true);
    setLoading(true);

    onPress();

    setTimeout(() => {
      setLoading(false);
      setButtonPressed(false);
    }, loadingDuration);
  };

  const buttonOpacity = disabled || buttonPressed ? 0.5 : 1;
  const textOpacity = disabled || buttonPressed ? 0.5 : 1;

  return (
    <TouchableOpacity
      style={[
        buttonStyle.button,
        style,
        { backgroundColor: background, opacity: buttonOpacity },
      ]}
      onPress={handlePress}
      disabled={disabled || buttonPressed}
    >
      {!loading && (
        <UIThemedText
          style={[buttonStyle.buttonText, { color: TEXT_THEME.primary }]}
          type="link"
        >
          {title}
        </UIThemedText>
      )}
      {loading && <UILoader size="small" />}
    </TouchableOpacity>
  );
};

export default UIButton;
