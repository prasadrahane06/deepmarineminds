import { APP_THEME } from "@/constants/Colors";
import { loaderStyles } from "@/constants/Styles";
import React from "react";
import { ActivityIndicator } from "react-native";
import { UIThemedView } from "./UIThemedView";

type UILoaderProps = {
  size?: "small" | "large" | number;
  color?: string;
};

export default function UILoader({
  size = "large",
  color = APP_THEME.blue,
}: UILoaderProps) {
  return (
    <UIThemedView style={[loaderStyles.container]}>
      <ActivityIndicator size={size} color={color} shouldRasterizeIOS />
    </UIThemedView>
  );
}
