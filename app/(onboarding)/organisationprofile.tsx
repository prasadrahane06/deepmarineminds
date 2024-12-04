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
const organisationprofile = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VUISafeAreaView>
        <VUIThemedView style={initialPageStyles.container}>
          <VUIThemedView
            style={{
              justifyContent: "center",
              paddingHorizontal: 24,
              paddingVertical: 2,
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
              minHeight: 120,
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
              Let's set up your{" "}
              <Text style={{ color: TEXT_THEME.yellow }}>
                organisation profile{" "}
              </Text>
            </VUIThemedText>
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
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={keyboardVerticalOffset}
              >
                <View
                  style={{
                    flex: 1,
                    width: "100%",
                    paddingHorizontal: 24,
                  }}
                >
                  <ScrollView
                    contentContainerStyle={{
                      flexGrow: 1,
                      paddingBottom: 95, 
                    }}
                    showsVerticalScrollIndicator={false}
                  >
                    <VUIThemedText
                      type="subtitle"
                      style={{
                        fontFamily: "Urbanist-regular",
                        marginBottom: 40,
                      }}
                    >
                      Creating your organisation profile{" "}
                      <Text style={{ color: "#031E47" }}>
                        helps candidates understand your company’s values, work
                        environment.{" "}
                      </Text>
                    </VUIThemedText>
                    <VUIInputField
                      label={INPUT_FIELDS.Organisation_name.label}
                      placeholder={INPUT_FIELDS.Organisation_name.placeholder}
                    />
                    <VUIInputField
                      label={INPUT_FIELDS.about.label}
                      placeholder={INPUT_FIELDS.about.placeholder}
                      numberOfLines={100}
                      multiline
                      style={{ marginTop: 24 }}
                    />
                  </ScrollView>
                </View>

                {/* Button Container */}
                {!isKeyboardVisible && (
            <View style={buttonStyle.buttonContainer}>
              <VUIButton
                title={UNIVERSAL_TEXT.continue}
                disabled={false}
                background="#FFED89"
                onPress={() => {
                  router.push("/");
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

export default organisationprofile;