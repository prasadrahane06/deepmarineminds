import { StyleSheet, StatusBar, Text, ActivityIndicator } from "react-native";
import React from "react";
import { UISafeAreaView } from "@/components/common/UISafeAreaView";
import { UIThemedView } from "@/components/common/UIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { UIBottomContainer } from "@/components/common/UIBottomContainer";
import UIButton from "@/components/common/UIButton";
import { UNIVERSAL_TEXT } from "@/constants/Properties";
import { UIThemedText } from "@/components/common/UIThemedText";
import UIHeaderText from "@/components/common/UIHeaderText";
import { TEXT_THEME } from "@/constants/Colors";

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
        <Text>Don’t have an account?</Text>
        <Text>Get in touch</Text>

        <UIBottomContainer>
          <UIButton
            title={UNIVERSAL_TEXT.login_into_your_account}
            disabled={false}
            background="#FFED89"
            onPress={() => {
              console.log("Button pressed");
            }}
          />
        </UIBottomContainer>
      </UIThemedView>
    </UISafeAreaView>
  );
};

export default InitialPage;
