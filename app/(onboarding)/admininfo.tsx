import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView,
  Alert,
} from "react-native";

import { Image } from "expo-image";
import { useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { buttonStyle, initialPageStyles } from "@/constants/Styles";
import { ApiErrorToast, ApiSuccessToast } from "@/components/common/VUIToast";
import { yupResolver } from "@hookform/resolvers/yup";

import VUIWaveProgressBar from "@/components/common/VUIWaveProgressBar";

import { APP_THEME, TEXT_THEME } from "@/constants/Colors";
import { VUIThemedText } from "@/components/common/VUIThemedText";
import { VUIBottomContainer } from "@/components/common/VUIBottomContainer";
import { router } from "expo-router";
import { INPUT_FIELDS, UNIVERSAL_TEXT } from "@/constants/Properties";
import * as Yup from "yup";
import { Asset } from "expo-asset";
import VUIBackButton from "@/components/common/VUIBackButton";

import VUIButton from "@/components/common/VUIButton";
import VUIInputField from "@/components/common/VUIInputField";
import DropdownComponent from "@/components/common/VUIDropDown";
import { ContactNumberField } from "@/components/screenComponents/ContactNumberField";
const schema = Yup.object().shape({
  input: Yup.string().when("selectedButton", {
    is: "mobile",
    then: (schema) =>
      schema
        .required(UNIVERSAL_TEXT.validate_mobile)
        .test(
          "mobile-phoneCode-length",
          "Mobile number is not valid",
          function (value) {
            if (value) {
              const { phoneCode } = this.parent;
              const onlyPhoneCode = phoneCode.split("+")[1];
              const totalLength =
                (value ? value.length : 0) +
                (onlyPhoneCode ? onlyPhoneCode.length : 0);
              return totalLength === 12;
            }
          }
        ),
    otherwise: (schema) =>
      schema
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, UNIVERSAL_TEXT.validate_email)
        .required(UNIVERSAL_TEXT.validate_email),
  }),
  phoneCode: Yup.string(),
  selectedButton: Yup.string().required(),
});
const admininfo = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const { watch, reset, setValue, control, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      input: "",
      phoneCode: "+91",
      selectedButton: "mobile",
    },
  });
  const [error, setError] = useState<string | undefined>("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VUISafeAreaView>
        <VUIThemedView style={initialPageStyles.container}>
          <VUIThemedView
            style={{
              justifyContent: "center",
              paddingHorizontal: 24,
              paddingVertical: 7,
            }}
          >
            <VUIWaveProgressBar />
          </VUIThemedView>
          <VUIThemedView
            style={{
              justifyContent: "center",
              paddingHorizontal: 24,
              paddingVertical: 7,
            }}
          >
            <VUIBackButton
              onPress={() => {
                router.back();
              }}
            />
          </VUIThemedView>

          <VUIThemedView
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <VUIThemedText
              type="header"
              style={{
                flex: 1,

                letterSpacing: 1,
                color: TEXT_THEME.regular,
                marginLeft: 24,
              }}
            >
              <Text style={{ color: TEXT_THEME.yellow }}>Welcome onboard!</Text>{" "}
              Tell us a bit about yourself!
            </VUIThemedText>
            <Image
              style={{ width: 106, height: 120 }}
              source={Asset.fromModule(
                require("@/assets/images/local/Name.png")
              )}
            />
          </VUIThemedView>
          <VUIThemedView
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginTop: 16,
            }}
          >
            <VUIBottomContainer
              style={{
                flex: 1,
                paddingTop: 40,
                bottom: 0,
              }}
            >
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={keyboardVerticalOffset}
              >
                <ScrollView>
                  <View
                    style={{
                      flex: 1,

                      width: "100%",
                      paddingHorizontal: 24,
                    }}
                  >
                    <VUIInputField
                      label={INPUT_FIELDS.name.label}
                      placeholder={INPUT_FIELDS.name.placeholder}
                    />
                    <ContactNumberField control={control} trigger={trigger} text="Optional" />
                  </View>
                </ScrollView>
                {!isKeyboardVisible && (
                <View style={buttonStyle.buttonContainer}>
                  <VUIButton
                    title={UNIVERSAL_TEXT.continue}
                    disabled={false}
                    background="#FFED89"
                    onPress={() => {
                      router.push("/organisationprofile");
                    }}
                    loadingDuration={1000}
                  />
                  
                </View>
                )}
              </KeyboardAvoidingView>
            </VUIBottomContainer>
          </VUIThemedView>
        </VUIThemedView>
      </VUISafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default admininfo;
