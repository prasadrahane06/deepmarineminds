import { StyleSheet, StatusBar, Text, ActivityIndicator } from "react-native";
import React from "react";
import { UISafeAreaView } from "@/components/common/UISafeAreaView";
import { UIThemedView } from "@/components/common/UIThemedView";
import { initialPageStyles } from "@/constants/Styles";
import { UIBottomContainer } from "@/components/common/UIBottomContainer";
import UIButton from "@/components/common/UIButton";
import { UNIVERSAL_TEXT } from "@/constants/Properties";

const InitialPage = () => {
  return (
    <UISafeAreaView>
      <UIThemedView style={initialPageStyles.container}>
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
