import { APP_THEME } from "@/constants/Colors";
import { loaderStyles } from "@/constants/Styles";
import React from "react";
import { ActivityIndicator } from "react-native";
import { UIThemedView } from "./UIThemedView";

export default function AUILoader() {
  return (
    <UIThemedView style={[loaderStyles.container]}>
      <ActivityIndicator
        size="large"
        color={APP_THEME.blue}
        shouldRasterizeIOS
      />
    </UIThemedView>
  );
}
