import { defaultStyles } from "@/constants/Styles";
import { type ViewProps } from "react-native";
import { SafeAreaView } from "react-native";

export type ThemedViewProps = ViewProps & {
  style?: any;
  edges?: any;
};

export function VUISafeAreaView({
  style,
  edges = [],
  ...otherProps
}: ThemedViewProps) {
  return (
    <SafeAreaView
      style={[defaultStyles.safeAreaView, style]}
      {...otherProps}
    />
  );
}
