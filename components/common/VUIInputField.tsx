import { APP_THEME, TEXT_THEME } from "@/constants/Colors";
import { inputFieldStyle } from "@/constants/Styles";
// import { RootState } from "@/redux/store";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
// import { useSelector } from "react-redux";
import { VUIThemedText } from "./VUIThemedText";

import { Asset } from "expo-asset";
import { Image } from "expo-image";

/**
 * AUIInputField is a custom component of input field.
 * @param {string} [label]
 * @param {string} [placeholder]
 * @param {string} value
 * @param {string} onChangeText
 * @param {string} [error]
 * @param {boolean} [autoFocus]
 * @param {string} [keyboardType]
 */
const images = {
  verified: Asset.fromModule(require("@/assets/icons/Verified.png")),
};
interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  inputStyle?: object;
  autoFocus?: boolean;
  style?: object;
  verifiedImage?: boolean;
}

const VUIInputField: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  style,
  inputStyle,
  autoFocus,
  keyboardType,
  multiline,
  numberOfLines,
  verifiedImage = false,
  ...props
}) => {
  // const theme = useSelector((state: RootState) => state.global.theme);

  return (
    <View style={[inputFieldStyle.container, style]}>
      {label && (
        <VUIThemedText
          style={[inputFieldStyle.label, { color: TEXT_THEME.primary }]}
        >
          {label}
        </VUIThemedText>
      )}
      <View style={inputFieldStyle.inputWrapper}>
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
          placeholder={placeholder}
          placeholderTextColor={APP_THEME.gray}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          {...props}
        />
        {verifiedImage && (
          <Image
            source={images.verified}
            contentFit="contain"
            style={inputFieldStyle.verifiedIcon}
          />
        )}
      </View>
      {error && <Text style={inputFieldStyle.error}>{error}</Text>}
    </View>
  );
};

export default VUIInputField;
