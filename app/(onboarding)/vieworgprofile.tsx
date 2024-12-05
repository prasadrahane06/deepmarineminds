import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView,
  Alert,
} from "react-native";

import { Image } from "expo-image";
import { useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { buttonStyle, initialPageStyles } from "@/constants/Styles";
import { ApiErrorToast, ApiSuccessToast } from "@/components/common/VUIToast";
import { yupResolver } from "@hookform/resolvers/yup";
import VUIWaveProgressBar from "@/components/common/VUIWaveProgressBar";

import { APP_THEME, TEXT_THEME } from "@/constants/Colors";
import { VUIThemedText } from "@/components/common/VUIThemedText";
import { VUIBottomContainer } from "@/components/common/VUIBottomContainer";
import { router } from "expo-router";
import { INPUT_FIELDS, UNIVERSAL_TEXT } from "@/constants/Properties";
import * as Yup from "yup";
import { Asset } from "expo-asset";
import VUIBackButton from "@/components/common/VUIBackButton";

import VUIButton from "@/components/common/VUIButton";
import OrgInfoCard from "@/components/screenComponents/OrgInfoCard";
import VUIBgImage from "@/components/common/VUIBgImage";
const schema = Yup.object().shape({
  input: Yup.string().when("selectedButton", {
    is: "mobile",
    then: (schema) =>
      schema
        .required(UNIVERSAL_TEXT.validate_mobile)
        .test(
          "mobile-phoneCode-length",
          "Mobile number is not valid",
          function (value) {
            if (value) {
              const { phoneCode } = this.parent;
              const onlyPhoneCode = phoneCode.split("+")[1];
              const totalLength =
                (value ? value.length : 0) +
                (onlyPhoneCode ? onlyPhoneCode.length : 0);
              return totalLength === 12;
            }
          }
        ),
    otherwise: (schema) =>
      schema
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, UNIVERSAL_TEXT.validate_email)
        .required(UNIVERSAL_TEXT.validate_email),
  }),
  phoneCode: Yup.string(),
  selectedButton: Yup.string().required(),
});
const vieworgprofile = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState(false);
  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  // Handle input change and update word count
  const handleInputChange = (text: string) => {
    const count = countWords(text);
    if (count > 5) {
      setError(true);
    } else {
      setError(false);
    }
    setInputText(text);
    setWordCount(count);
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const { watch, reset, setValue, control, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      input: "",
      phoneCode: "+91",
      selectedButton: "mobile",
    },
  });

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <VUISafeAreaView>
      <VUIThemedView style={initialPageStyles.container}>
        <VUIThemedView style={{backgroundColor:'transparent'}}>
          <VUIBgImage />

          <VUIThemedView
            style={{
              position: "absolute",
              top: 10,
              left: 0,
              right: 0,
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <VUIThemedView
              style={{
                justifyContent: "center",
                paddingHorizontal: 24,
                paddingVertical: 10,
                backgroundColor: "transparent",
              }}
            >
              <VUIWaveProgressBar />
            </VUIThemedView>
            <VUIThemedView
              style={{
                justifyContent: "center",
                paddingHorizontal: 24,
                paddingVertical: 7,
                backgroundColor: "transparent",
              }}
            >
              <VUIBackButton
                onPress={() => {
                  router.back();
                }}
              />
            </VUIThemedView>
          </VUIThemedView>
        </VUIThemedView>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          paddingBottom: 300
          }}
          showsVerticalScrollIndicator={false}
        >
          <VUIThemedView
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              paddingBottom: 17,
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
              Looking good!
              {" \n"}
              Here’s your{" "}
              <Text style={{ color: TEXT_THEME.yellow }}>
                organisation profile
              </Text>
            </VUIThemedText>
          </VUIThemedView>
          <VUIThemedView
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "transparent",
            }}
          >
            <VUIThemedText
              type="header"
              style={{
                flex: 1,
                fontSize: 14,
                fontFamily: "Urbanist-regular",
                letterSpacing: 1,
                color: TEXT_THEME.regular,
                marginLeft: 24,
              }}
            >
              You can edit this profile later{" \n"}
              in the the app.
            </VUIThemedText>
          </VUIThemedView>
          {/* card */}
          <VUIThemedView style={{ paddingHorizontal: 24 ,backgroundColor:"transparent"}}>
            <OrgInfoCard />
          </VUIThemedView>
        </ScrollView>

        {/* button container */}
        <VUIBottomContainer style={{
            width: "100%",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,           
          
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingVertical: 20,
            flex: 1,
            position: "absolute",
            bottom: 0,
        }}>
          <VUIButton
            title={UNIVERSAL_TEXT.add_fleet}
            disabled={false}
            background="#FFED89"
            onPress={() => {
              router.push("/vieworgprofile");
            }}
            loadingDuration={1000}
          />
          <VUIButton
            title={UNIVERSAL_TEXT.add_team}
            disabled={false}
            onPress={() => {
              router.push("/vieworgprofile");
            }}
            loadingDuration={1000}
            style={{marginTop:12,borderColor:"#1269EB",borderWidth:1}}
            background="#FFFFFF"
          />

          <VUIThemedText style={{color:"#1269EB",marginTop:12}}>I’’ll do it later</VUIThemedText>
        </VUIBottomContainer>
      </VUIThemedView>
    </VUISafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default vieworgprofile;
