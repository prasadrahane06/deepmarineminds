import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VUISafeAreaView>
        <VUIThemedView style={initialPageStyles.container}>
          <VUIWaveProgressBar />
          <VUIBackButton
            onPress={() => {
              router.back();
            }}
          />
          <VUIThemedView
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: hp("2%"),
              marginLeft: wp("7%"),
            }}
          >
            <VUIThemedText
              type="header"
              style={{
                letterSpacing: wp("0.2%"),
                color: TEXT_THEME.regular,
              }}
            >
              Lets create<Text>{"\n"}</Text>a
              <Text style={{ color: TEXT_THEME.yellow }}> strong password</Text>
            </VUIThemedText>
            <VUIImage
              style={{ width: 106, height: 106 }}
              path={Asset.fromModule(
                require("@/assets/images/local/Password.png")
              )}
            />
          </VUIThemedView>

          <VUIBottomContainer
            style={{
              marginTop: hp("3%"),
              justifyContent: "start",
              alignItems: "start",
              position: "fixed",
              paddingVertical: 0,
              paddingHorizontal:0,
            }}
          >
            <VUIThemedText
              type="subtitle"
              style={{
                marginTop: hp("6%"),
                fontFamily: "Urbanist-regular",
                paddingHorizontal: wp("6%"),
              }}
            >
              Set a strong password to protect your account and ensure smooth
              sailing.
            </VUIThemedText>
            <KeyboardAvoidingView
              style={{ flex: 1,                paddingHorizontal: wp("6%"),
              }}
              behavior="padding"
              keyboardVerticalOffset={keyboardVerticalOffset}
              
            >
              <VUIInputField />
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
              />
              <View
              style={buttonStyle.buttonContainer}>
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
      </VUISafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default createpass;
