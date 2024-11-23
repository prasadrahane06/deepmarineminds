import {
  StyleSheet,
  StatusBar,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { UISafeAreaView } from "@/components/common/UISafeAreaView";
import { UIThemedView } from "@/components/common/UIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { UIBottomContainer } from "@/components/common/UIBottomContainer";
import UIButton from "@/components/common/UIButton";
import { UNIVERSAL_TEXT } from "@/constants/Properties";
import UIHeaderText from "@/components/common/UIHeaderText";
import { TEXT_THEME } from "@/constants/Colors";

import UIImageCarousel from "@/components/common/UIImageCarousel";

const InitialPage = () => {
  return (
    <UISafeAreaView>
      <UIThemedView style={initialPageStyles.container}>
        <UIHeaderText
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
            gap: 2,
            width: 232,
            height: 20,
          }}
        >
          <Text
            style={{
              color: "#F9F4EE99",
              opacity: 0.7,
              fontSize: 14,
              fontWeight: "600",
              fontFamily: "Urbanist-Black",
              lineHeight: 20,
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
              fontFamily: "Urbanist-Black",
              lineHeight: 20,
            }}
          >
            Get in touch
          </Text>
        </TouchableOpacity>

        <UIImageCarousel />
        <UIBottomContainer>
          <UIButton
            title={UNIVERSAL_TEXT.login_into_your_account}
            disabled={false}
            background="#FFED89"
            onPress={() => {
              console.log("Button pressed");
            }}
            loadingDuration={1000}
          />
        </UIBottomContainer>
      </UIThemedView>
    </UISafeAreaView>
  );
};

export default InitialPage;
