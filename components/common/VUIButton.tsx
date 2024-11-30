import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { APP_THEME, BACKGROUND_THEME, TEXT_THEME } from "@/constants/Colors";
import { buttonStyle } from "@/constants/Styles";
import { VUIThemedText } from "./VUIThemedText";
import VUILoader from "./VUILoader";
import { VUIThemedView } from "./VUIThemedView";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CustomButtonProps {
  style?: object;
  extraStyles?: object;
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
  extraStyles,
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
      <VUIThemedView
        style={{
          backgroundColor: "transparent",
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <VUIThemedText
          style={[
            buttonStyle.buttonText,
            { color: TEXT_THEME.primary, opacity: textOpacity },
          ]}
          type="link"
        >
          {title}
        </VUIThemedText>
        {loading && (
          <VUILoader
            size="small"
            otherStyles={{
              position: "absolute",
              zIndex: 1,
              alignSelf: "center",
              opacity: 0.7,
            }}
          />
        )}
      </VUIThemedView>
    </TouchableOpacity>
  );
};

export default UIButton;
