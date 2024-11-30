import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { initialPageStyles } from "@/constants/Styles";
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
              Lets <Text style={{ color: TEXT_THEME.yellow }}>verify</Text>{" "}
              <Text>{"\n"}</Text>
              your email address
            </VUIThemedText>
            <VUIImage
              style={{ width: 106, height: 106 }}
              path={Asset.fromModule(require("@/assets/images/local/Mail.png"))}
            />
          </VUIThemedView>

          <VUIBottomContainer
            style={{
              marginTop: hp("3%"),
              justifyContent: "start",
              alignItems: "start",
              position: "fixed",
            }}
          >
            <VUIThemedText
              type="subtitle"
              style={{
                marginTop: hp("1%"),
                fontFamily: "Urbanist-regular",
              }}
            >
              We have sent a 6-digit verification code to
              <Text>{"\n"}</Text>
              <Text style={{ color: "#031E47" }}>john.doe@oceanic.co,</Text>
              enter it below:
            </VUIThemedText>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              keyboardVerticalOffset={keyboardVerticalOffset}
            >
              <OTPScreen
                length={6}
                changeLabel={"verification code"}
                onChange={handleOtpChange}
                onResendOtp={() =>
                    handleOnResendOtp()
                }
                autoFocus={true}
              />

              {loading  && <VUILoader size="large" />}
            </KeyboardAvoidingView>
          </VUIBottomContainer>
        </VUIThemedView>
      </VUISafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default verifyOtp;