import { TEXT_THEME } from "@/constants/Colors";
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "header" | "defaultSemiBold" | "subtitle" | "link";
};

export function UIThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        { color: TEXT_THEME.primary },
        type === "default" ? styles.default : undefined,
        type === "header" ? styles.header : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        { fontFamily: "Urbanist-Black" },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 24,
    fontSize: 16,
  },
});