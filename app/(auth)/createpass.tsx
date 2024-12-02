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

import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { buttonStyle, initialPageStyles } from "@/constants/Styles";
import { ApiErrorToast, ApiSuccessToast } from "@/components/common/VUIToast";

import VUIWaveProgressBar from "@/components/common/VUIWaveProgressBar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
import VUIImage from "@/components/common/VUIImage";
import OTPScreen from "@/components/screenComponents/OTPScreen";
import VUIButton from "@/components/common/VUIButton";
import PasswordInput from "@/components/screenComponents/PasswordInout";

const createpass = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const correctOtp = "123456"; // Replace with dynamic OTP if needed

  const handleOtpChange = (otp: string) => {
    setEnteredOtp(otp);
    if (otp === correctOtp) {
      setLoading(true);
      setTimeout(() => {
        router.push("/");
        setLoading(false);
      }, 2000);
    }
  };
  const handleOnResendOtp = () => {
    // Resend OTP logic
    console.log("Resend OTP");
  };
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");

  const handleSubmit = () => {
    if (!password) {
      setError("Password is required");
    } else {
      setError(undefined);
      Alert.alert("Password Submitted", password);
    }
  };

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
              Lets create a{" "}
              <Text style={{ color: TEXT_THEME.yellow }}>strong password</Text>
            </VUIThemedText>
            <Image
              style={{ width: 106, height: 106 }}
              source={Asset.fromModule(
                require("@/assets/images/local/Password.png")
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
                    <VUIThemedText
                      type="subtitle"
                      style={{
                        fontFamily: "Urbanist-regular",

                        marginBottom: 40,
                      }}
                    >
                      Set a strong password to protect your account and ensure
                      smooth sailing.
                    </VUIThemedText>
                    <PasswordInput
                      label="Password"
                      value={password}
                      onChangeText={setPassword}
                      placeholderImage={require("@/assets/images/local/passwordplacehold.png")}
                      error={error}
                    />
                    <Image
                      style={{
                        width: "100%",
                        height: 184,
                        marginTop: 20,
                        borderRadius: 10,
                      }}
                      source={Asset.fromModule(
                        require("@/assets/images/local/Passwordguid.png")
                      )}
                      contentFit="contain"
                    />
                  </View>
                </ScrollView>

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
              </KeyboardAvoidingView>
            </VUIBottomContainer>
          </VUIThemedView>
        </VUIThemedView>
      </VUISafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default createpass;
