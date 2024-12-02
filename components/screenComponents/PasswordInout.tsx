import { TEXT_THEME } from "@/constants/Colors";
import { inputFieldStyle } from "@/constants/Styles";
import React, { useState } from "react";
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import { VUIThemedText } from "../common/VUIThemedText";
const images = {
  show: Asset.fromModule(require("@/assets/icons/eye.png")),
  hide: Asset.fromModule(require("@/assets/icons/eye-hide.png")),
};
interface PasswordInputProps extends TextInputProps {
  value: string;
  label: string;
  onChangeText: (text: string) => void;
  placeholderImage: ImageSourcePropType;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: object;
  inputStyle?: object;
  autoFocus?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  style,
  inputStyle,
  label,
  onChangeText,
  placeholderImage,
  error,
  multiline,
  numberOfLines,
  containerStyle,
  autoFocus,

  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[inputFieldStyle.container, style]}>
      {label && (
        <VUIThemedText
          style={[inputFieldStyle.label, { color: TEXT_THEME.primary }]}
        >
          {label}
        </VUIThemedText>
      )}
      { !value && (
        <Image
          source={placeholderImage}
          style={styles.placeholderImage}
          contentFit="contain"
        />
      )}
      {/* Password Input */}
      <TextInput
        style={[
          multiline || numberOfLines
            ? inputFieldStyle.multilineInput
            : inputFieldStyle.input,
          // @ts-ignore
          error && { borderWidth: 1, borderColor: "red" },
          inputStyle,
          { color: TEXT_THEME.primary },
        ]}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        {...props}
      />
      {/* Show/Hide Button */}
      <TouchableOpacity
        onPress={() => setShowPassword((prev) => !prev)}
        style={styles.ImageContianer}
      >
        <Image
          source={showPassword ?images.show : images.hide}
          contentFit="contain"
          style={{ width: 26, height: 26 }}
        />
      </TouchableOpacity>
      {/* Error Message */}
      {error && <Text style={inputFieldStyle.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    position: "relative",
    marginVertical: 10,
  },
  errorContainer: {
    borderColor: "red",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  placeholderImage: {
    position: "absolute",
    width: "100%",
    height: 20,
    top:"50%",
    opacity: 0.4,
  },
  ImageContianer: {
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "flex-end",
    top:"48%",
    right: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default PasswordInput;
