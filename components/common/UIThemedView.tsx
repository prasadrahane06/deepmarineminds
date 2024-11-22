import { BACKGROUND_THEME } from "@/constants/Colors";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {};

export function UIThemedView({ style, ...otherProps }: ThemedViewProps) {
  return (
    <View
      style={[
        {
          backgroundColor: BACKGROUND_THEME.background,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
