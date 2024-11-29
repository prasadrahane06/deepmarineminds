import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { initialPageStyles } from "@/constants/Styles";

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
const emailSchema = Yup.object().shape({
  input: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, UNIVERSAL_TEXT.validate_email)
    .required(UNIVERSAL_TEXT.validate_email),
  phoneCode: Yup.string(),
  selectedButton: Yup.string().required(),
});

const signup = () => {
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
        router.push("/");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isEmailValid]);

  return (
    <VUISafeAreaView>
      <VUIThemedView style={initialPageStyles.container}>
        <VUIWaveProgressBar />

        <VUIThemedText
          type="header"
          style={{
            marginTop: hp("3%"),
            marginLeft: wp("6.4%"),
            letterSpacing: wp("0.2%"),
            color: TEXT_THEME.regular,
          }}
        >
          Drop your <Text style={{ color: TEXT_THEME.yellow }}>email</Text> for
          <Text>{"\n"}</Text>
          lightening quick seafarer <Text>{"\n"}</Text>recruitment.
        </VUIThemedText>

        <VUIBottomContainer
          style={{
            marginTop: hp("5%"),
            justifyContent: "start",
            alignItems: "start",
            position: "fixed",
          }}
        >
          <VUIInputField
            label="Email ID"
            placeholder="john.doe@oceanic.co"
            value={email}
            onChangeText={handleEmailChange}
            error={!isEmailValid && email ? "Invalid email address" : undefined}
            verifiedImage={isEmailValid && email ? true : false}
          />

          <VUIThemedText
            type="subtitle"
            style={{
              marginTop: hp("2%"),
              fontFamily: "Urbanist-regular",
            }}
          >
            This is the email address you provided<Text>{"\n"}</Text>to the
            <Text style={{ color: "#031E47" }}> Mariner team.</Text>
          </VUIThemedText>

          {isEmailValid && <VUILoader size="large" />}
        </VUIBottomContainer>
      </VUIThemedView>
    </VUISafeAreaView>
  );
};

export default signup;
