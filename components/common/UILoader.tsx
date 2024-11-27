import { APP_THEME } from "@/constants/Colors";
import { loaderStyles } from "@/constants/Styles";
import React from "react";
import { ActivityIndicator } from "react-native";
import { UIThemedView } from "./UIThemedView";

type UILoaderProps = {
  size?: "small" | "large" | number;
  color?: string;
  otherStyles?: object;
};

export default function UILoader({
  size = "large",
  color = APP_THEME.blue,
  otherStyles,
}: UILoaderProps) {
  return (
    <UIThemedView style={[loaderStyles.container, otherStyles]}>
      <ActivityIndicator
        size={size}
        color={color}
        shouldRasterizeIOS
        animating={true}
      />
    </UIThemedView>
  );
}
