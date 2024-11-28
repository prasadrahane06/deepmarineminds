import {
  StyleSheet,
  StatusBar,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { VUIBottomContainer } from "@/components/common/VUIBottomContainer";
import VUIButton from "@/components/common/VUIButton";
import { UNIVERSAL_TEXT } from "@/constants/Properties";
import VUIHeaderText from "@/components/common/VUIHeaderText";
import { TEXT_THEME } from "@/constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import VUIImageCarousel from "@/components/common/VUIImageCarousel";
import { router } from "expo-router";

const InitialPage = () => {
  const submit = () => {
    router.replace("/signup");
  };
  return (
    <VUISafeAreaView>
      <VUIThemedView style={initialPageStyles.container}>
        <VUIHeaderText
          textParts={[
            { text: "Welcome to ", style: { color: TEXT_THEME.regular } },
            {
              text: "Deep Mariner Mind",
              style: { color: TEXT_THEME.yellow },
            },
          ]}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: hp("1%"),
            gap: wp("0.5%"),
            marginLeft: wp("6.4%"),
          }}
        >
          <Text
            style={{
              color: "#F9F4EE99",
              opacity: 0.7,
              fontSize: wp("3.5%"),
              fontWeight: "600",
              fontFamily: "Urbanist-Black",
              lineHeight: hp("2.5%"),
            }}
          >
            Don’t have an account?
          </Text>
          <Text
            style={{
              color: "#EEFBFF",
              opacity: 0.9,
              fontSize: wp("3.5%"),
              fontWeight: "600",
              fontFamily: "Urbanist-Black",
              lineHeight: hp("2.5%"),
            }}
          >
            Get in touch
          </Text>
        </TouchableOpacity>

        <VUIImageCarousel />
        <VUIBottomContainer>
          <VUIButton
            title={UNIVERSAL_TEXT.login_into_your_account}
            disabled={false}
            background="#FFED89"
            onPress={submit}
            loadingDuration={1000}
          />
        </VUIBottomContainer>
      </VUIThemedView>
    </VUISafeAreaView>
  );
};

export default InitialPage;
