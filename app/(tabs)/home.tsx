import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  FlatList,
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
import HomeCard from "@/components/screenComponents/HomeCard";
import VUIInputField from "@/components/common/VUIInputField";
import NewsFilterCard from "@/components/screenComponents/NewsFilterCard";
import FilterListComponent from "@/components/screenComponents/NewsFilterCard";
import Help from "@/components/screenComponents/Help";

const images = {
  noopenjobs: Asset.fromModule(require("@/assets/images/local/noopenjobs.png")),
  linkedin: Asset.fromModule(require("@/assets/icons/linkedIn.png")),
  telegram: Asset.fromModule(require("@/assets/icons/telegram.png")),
  website: Asset.fromModule(require("@/assets/icons/website.png")),
};


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
const home = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(''); // Manage selection state in parent

const handlePress = (filter:string) => { // Function to handle selection
  setSelectedFilter(filter);
};
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >      <VUIThemedView style={initialPageStyles.container}>

          <VUIThemedView
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <VUIThemedView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 24,
                paddingVertical: 16,
                backgroundColor: "transparent",
              }}
            >
              <Image
                style={{
                  width: 36,
                  height: 36,
                  borderWidth: 1,
                  borderColor: "#CDD2D980",
                  borderRadius: 100,
                }}
                source={Asset.fromModule(
                  require("@/assets/icons/profile-rectangle.png")
                )}
                contentFit="contain"
              />
              <View style={{  }}>
                <Image
                  style={{
                    width: 24,
                    height: 25,

                  }}
                  source={Asset.fromModule(
                    require("@/assets/icons/bell.png")
                  )}
                  contentFit="contain"
                />
                <Image
                  style={{
                    width: 12,
                    height: 12,
                    position: "absolute",
                    alignSelf: "flex-end",
                  }}
                  source={Asset.fromModule(
                    require("@/assets/icons/tracknotification.png")
                  )}
                  contentFit="contain"
                />
              </View>

            </VUIThemedView>
            <VUIThemedView
              style={{
                justifyContent: "center",
                paddingHorizontal: 24,
                paddingVertical: 7,
                backgroundColor: "transparent",
              }}
            >

              <VUIThemedText style={{ color: "#FFED89", fontSize: 20, fontWeight: "700", fontFamily: "Urbanist-Bold", letterSpacing: 0.3 }}>Oceanic ventures </VUIThemedText>
            </VUIThemedView>
            <VUIThemedView style={{ flex: 1, paddingHorizontal: 24,  paddingVertical: 16 }}>
              <HomeCard title="Let’s add your fleet"
                subtitle="All your jobs are organized by fleet. Make sure to add a fleet before creating a job listing."
                buttontext={UNIVERSAL_TEXT.add_fleet}
                Imagepath={images.noopenjobs} />
            </VUIThemedView>
            <VUIBottomContainer
              style={{ flex: 1 }}>
              <VUIThemedView style={{  backgroundColor: "transparent", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, marginTop: 40 }}>
                <VUIThemedText style={{ color: "#031E47", fontFamily: "Urbanist-BOld", fontSize: 20, fontWeight: "700" }}>News tailored {"\n"} for you</VUIThemedText>
                <Image
                  style={{
                    width: 48,
                    height: 56,

                  }}
                  source={Asset.fromModule(
                    require("@/assets/images/local/Anchor.png")
                  )}
                />
              </VUIThemedView>
              <VUIThemedView style={{  backgroundColor: "transparent", marginTop: 40 }}>
              
                 <FilterListComponent  />
              </VUIThemedView>
              <VUIThemedView style={{ backgroundColor: "transparent", marginTop: 40,paddingHorizontal:24 }}>
              
                 <Help  />
              </VUIThemedView>

            </VUIBottomContainer>
          </VUIThemedView>






        </VUIThemedView>
      </ScrollView>
    </VUISafeAreaView>
  );
};

export default home;
