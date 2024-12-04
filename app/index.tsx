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
    router.replace("/createorgprofile");
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
            marginTop: 8,
            gap: 5,
            marginLeft: 24,
          }}
        >
          <Text
            style={{
              color: "#F9F4EE99",
              opacity: 0.7,
              fontSize: 14,
              fontWeight: "600",
              fontFamily: "Urbanist-regular",
            }}
          >
            Don’t have an account?
          </Text>
          <Text
            style={{
              color: "#EEFBFF",
              opacity: 0.9,
              fontSize: 14,
              fontWeight: "600",
              fontFamily: "Urbanist-regular",
            }}
          >
            Get in touch
          </Text>
        </TouchableOpacity>
        <VUIThemedView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VUIImageCarousel />
        </VUIThemedView>
        <VUIThemedView
          style={{
            justifyContent: "flex-end",
          }}
        >
          <VUIBottomContainer
            style={{
              paddingVertical: 40,
              paddingHorizontal: 24,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              // position: "fixed",
            }}
          >
            <VUIButton
              title={UNIVERSAL_TEXT.login_into_your_account}
              disabled={false}
              background="#FFED89"
              onPress={submit}
              loadingDuration={1000}
            />
          </VUIBottomContainer>
        </VUIThemedView>
      </VUIThemedView>
    </VUISafeAreaView>
  );
};

export default InitialPage;
