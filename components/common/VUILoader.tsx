import { APP_THEME } from "@/constants/Colors";
import { loaderStyles } from "@/constants/Styles";
import React from "react";
import { ActivityIndicator } from "react-native";
import { VUIThemedView } from "./VUIThemedView";

type UILoaderProps = {
  size?: "small" | "large" | number;
  color?: string;
  otherStyles?: object;
};

export default function VUILoader({
  size = "large",
  color = APP_THEME.blue,
  otherStyles,
}: UILoaderProps) {
  return (
    <VUIThemedView style={[loaderStyles.container, otherStyles]}>
      <ActivityIndicator
        size={size}
        color={color}
        shouldRasterizeIOS
        animating={true}
      />
    </VUIThemedView>
  );
}
