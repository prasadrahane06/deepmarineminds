import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { Asset } from "expo-asset";

import VUIWaveProgressBar from "@/components/common/VUIWaveProgressBar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TEXT_THEME } from "@/constants/Colors";
import { VUIThemedText } from "@/components/common/VUIThemedText";
import VUIInputField from "@/components/common/VUIInputField";
import { VUIBottomContainer } from "@/components/common/VUIBottomContainer";
const signup = () => {
  const [signupType, setSignupType] = useState<any>(() => {
    // if (email === "admin") {
    //   return INPUT_FIELDS.email;
    // }
    // return INPUT_FIELDS.company_email;
  });
  return (
    <VUISafeAreaView>
      <VUIThemedView style={initialPageStyles.container}>
        <VUIWaveProgressBar />

        <VUIThemedText
          type="header"
          style={{
            marginTop: hp("3%"),
            marginLeft: wp("6.4%"),
            color: TEXT_THEME.regular,
          }}
        >
          Drop your <Text style={{ color: TEXT_THEME.yellow }}>email</Text> for
          <Text>{"\n"}</Text>
          lightening quick seafarer recruitment.
        </VUIThemedText>
        <VUIBottomContainer style={{ height: hp("70%") }}>
          <VUIInputField label="Email" placeholder="john.doe@oceanic.co" />
        </VUIBottomContainer>
      </VUIThemedView>
    </VUISafeAreaView>
  );
};

export default signup;
