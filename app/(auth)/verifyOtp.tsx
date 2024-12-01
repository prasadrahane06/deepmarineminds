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
import { ApiErrorToast, ApiSuccessToast } from "@/components/common/VUIToast";
import { Image } from "expo-image";

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

const verifyOtp = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const correctOtp = "123456"; // Replace with dynamic OTP if needed

  const handleOtpChange = (otp: string) => {
    setEnteredOtp(otp);
    if (otp === correctOtp) {
      setLoading(true);
      setTimeout(() => {
        router.push("/createpass");
        setLoading(false);
      }, 1000);
    }
  };
  const handleOnResendOtp = () => {
    // Resend OTP logic
    console.log("Resend OTP");
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
              Lets <Text style={{ color: TEXT_THEME.yellow }}>verify {""}</Text>
              your email address
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
                  <VUIThemedText
                    type="subtitle"
                    style={{
                      fontFamily: "Urbanist-regular",

                      marginBottom: 40,
                    }}
                  >
                    We have sent a 6-digit verification code to {""}
                    <Text style={{ color: "#031E47" }}>
                      john.doe@oceanic.co, {""}
                    </Text>
                    enter it below:
                  </VUIThemedText>
                  <OTPScreen
                    length={6}
                    changeLabel={"verification code"}
                    onChange={handleOtpChange}
                    onResendOtp={() => handleOnResendOtp()}
                    autoFocus={true}
                  />

                  {loading && <VUILoader size="large" />}
                </View>
              </KeyboardAvoidingView>
            </VUIBottomContainer>
          </VUIThemedView>
        </VUIThemedView>
      </VUISafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default verifyOtp;
