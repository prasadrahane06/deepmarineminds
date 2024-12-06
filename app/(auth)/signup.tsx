import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { initialPageStyles } from "@/constants/Styles";

import VUIWaveProgressBar from "@/components/common/VUIWaveProgressBar";

import { TEXT_THEME } from "@/constants/Colors";
import { VUIThemedText } from "@/components/common/VUIThemedText";
import VUIInputField from "@/components/common/VUIInputField";
import { VUIBottomContainer } from "@/components/common/VUIBottomContainer";
import VUILoader from "@/components/common/VUILoader";
import { router } from "expo-router";
import { UNIVERSAL_TEXT } from "@/constants/Properties";
import * as Yup from "yup";
import { Asset } from "expo-asset";
import VUIBackButton from "@/components/common/VUIBackButton";
import { Image } from "expo-image";
const emailSchema = Yup.object().shape({
  input: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, UNIVERSAL_TEXT.validate_email)
    .required(UNIVERSAL_TEXT.validate_email),
});

const signup = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsEmailValid(validateEmail(text));
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isEmailValid) {
      timer = setTimeout(() => {
        router.push("/verifyOtp");
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [isEmailValid]);

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
                router.push("/");
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
              Drop your <Text style={{ color: TEXT_THEME.yellow }}>email</Text>{" "}
              for lightening quick seafarer recruitment.
            </VUIThemedText>
            <Image
              style={{ width: 106, height: 106 }}
              source={Asset.fromModule(
                require("@/assets/images/local/Mail.png")
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
                paddingVertical: 40,
                bottom: 0,
              }}
            >
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                keyboardVerticalOffset={keyboardVerticalOffset}
              >
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 24,
                  }}
                >
                  <VUIInputField
                    label="Email ID"
                    placeholder="john.doe@oceanic.co"
                    value={email}
                    onChangeText={handleEmailChange}
                    error={
                      !isEmailValid && email
                        ? "Invalid email address"
                        : undefined
                    }
                    verifiedImage={isEmailValid && email ? true : false}
                  />
                  <VUIThemedText
                    type="subtitle"
                    style={{
                      marginTop: 12,
                    }}
                  >
                    This is the email address you provided to the
                    <Text style={{ color: "#031E47" }}> Mariner team.</Text>
                  </VUIThemedText>
                </View>

                {isEmailValid && <VUILoader size="large" />}
              </KeyboardAvoidingView>
            </VUIBottomContainer>
          </VUIThemedView>
        </VUIThemedView>
      </VUISafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default signup;
