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
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState(false);
  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  // Handle input change and update word count
  const handleInputChange = (text: string) => {
    const count = countWords(text);
    if (count > 5) {
      setError(true);
    } else {
      setError(false);
    }
    setInputText(text);
    setWordCount(count);
  };
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
 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VUISafeAreaView>
        <VUIThemedView style={initialPageStyles.container}>
          <VUIThemedView
            style={{
              justifyContent: "center",
              paddingHorizontal: 24,
              paddingVertical: 10,
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
              minHeight: 100,
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
              Let's set up your{" \n"}
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
                        marginBottom: 48,
                      }}
                    >
                      Creating your organisation profile{" "}
                      <Text style={{ color: "#031E47" }}>
                        helps candidates understand your company’s values, work
                        environment.{" "}
                      </Text>
                    </VUIThemedText>

                    <VUIThemedView
                      style={{
                        backgroundColor: "white",
                        position: "relative",
                        marginBottom: 48,
                      }}
                    >
                      <Image
                        style={{
                          width: 96,
                          height: 96,
                          borderWidth: 1,
                          borderColor: "#CDD2D980",
                          borderRadius: 100,
                        }}
                        source={Asset.fromModule(
                          require("@/assets/icons/profile.png")
                        )}
                        contentFit="contain"
                      />

                      <Image
                        style={{
                          width: 36,
                          height: 36,
                          position: "absolute",
                          bottom: 0,
                          left: 60,
                          alignSelf: "flex-start",
                        }}
                        source={Asset.fromModule(
                          require("@/assets/icons/edit.png")
                        )}
                        contentFit="contain"
                      />
                    </VUIThemedView>

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
                      showWordCount
                      wordCount={wordCount}
                      TargetwordCount={100}
                      value={inputText}
                      onChangeText={handleInputChange}
                      error={error?"Error: You have exceeded the word limit of 100 words!":""}
                      // editable={error?false:true}
                    
                    />
                  </ScrollView>
                </View>

                {!isKeyboardVisible && (
                  <View style={buttonStyle.buttonContainer}>
                    <VUIButton
                      title={UNIVERSAL_TEXT.continue}
                      disabled={false}
                      background="#FFED89"
                      onPress={() => {
                        router.push("/companyinfo");
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
