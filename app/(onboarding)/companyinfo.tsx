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
import { Controller, useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";
import { VUISafeAreaView } from "@/components/common/VUISafeAreaView";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { buttonStyle, initialPageStyles } from "@/constants/Styles";
import { ApiErrorToast, ApiSuccessToast } from "@/components/common/VUIToast";
import { yupResolver } from "@hookform/resolvers/yup";
import { City, Country, State } from "country-state-city";

import VUIWaveProgressBar from "@/components/common/VUIWaveProgressBar";

import { APP_THEME, TEXT_THEME } from "@/constants/Colors";
import { VUIThemedText } from "@/components/common/VUIThemedText";
import { VUIBottomContainer } from "@/components/common/VUIBottomContainer";
import { router } from "expo-router";
import {
  DROPDOWN_FIELD,
  INPUT_FIELDS,
  UNIVERSAL_TEXT,
} from "@/constants/Properties";
import * as Yup from "yup";
import { Asset } from "expo-asset";
import VUIBackButton from "@/components/common/VUIBackButton";

import VUIButton from "@/components/common/VUIButton";
import VUIInputField from "@/components/common/VUIInputField";
import { ContactNumberField } from "@/components/screenComponents/ContactNumberField";
import DropdownComponent from "@/components/common/VUIDropDown";

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
  qualification: Yup.string().required("Qualification is required"),
  academicSession: Yup.string().required("Academic session is required"),
  language: Yup.string().required("Language is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().optional(),
  state: Yup.string().required("State is required"),
  street: Yup.string(),
  postcode: Yup.string(),
});
const companyinfo = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null); // DONT REMOVE IT, IT IS USED IN COUNTRY AND STATE
  const [selectedState, setSelectedState] = useState<any>(null);

  const allCountries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];

  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

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
  const { watch, reset, setValue, control, formState, trigger, handleSubmit } =
    useForm({
      resolver: yupResolver(schema),
      mode: "all",

      defaultValues: {
        input: "",
        phoneCode: "+91",
        selectedButton: "mobile",
        qualification: "",
        academicSession: "",
        language: "",
        country: "",
        state: "",
        city: "",
        street: "",
        postcode: "",
      },
    });

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <VUISafeAreaView>
      <VUIThemedView style={initialPageStyles.container}>
        <VUIThemedView
          style={{
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingVertical: 10,
          }}
        >
          <VUIWaveProgressBar />
        </VUIThemedView>
        <VUIThemedView
          style={{
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingVertical: 7,
          }}
        >
          <VUIBackButton
            onPress={() => {
              router.back();
            }}
          />
        </VUIThemedView>

        <VUIThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 100,
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
            Share your{" "}
            <Text style={{ color: TEXT_THEME.yellow }}>company,s</Text>
            {" \n"}
            <Text style={{ color: TEXT_THEME.yellow }}>contact details</Text>
          </VUIThemedText>
        </VUIThemedView>
        <VUIThemedView
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginTop: 16,
          }}
        >
          <VUIBottomContainer
            style={{
              flex: 1,
              paddingTop: 40,
              bottom: 0,
            }}
          >
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              keyboardVerticalOffset={keyboardVerticalOffset}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  paddingHorizontal: 24,
                }}
              >
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 95,
                  }}
                  showsVerticalScrollIndicator={false}
                >
                  <VUIThemedText
                    type="subtitle"
                    style={{
                      fontFamily: "Urbanist-regular",
                      marginBottom: 32,
                    }}
                  >
                    Providing this helps candidates and enhance communication.
                  </VUIThemedText>

                  <VUIInputField
                    label={INPUT_FIELDS.company_email.label}
                    placeholder={INPUT_FIELDS.company_email.placeholder}
                  />
                  <ContactNumberField control={control} trigger={trigger} />

                  <VUIThemedView
                    style={{
                      backgroundColor: "white",
                      paddingVertical: 40,
                    }}
                  >
                    <Image
                      style={{
                        height: 6,
                      }}
                      source={Asset.fromModule(
                        require("@/assets/images/local/Union.png")
                      )}
                    />
                  </VUIThemedView>
                  <VUIThemedText
                    style={{
                      color: "#031E47",

                      marginBottom: 16,
                    }}
                  >
                    Address
                  </VUIThemedText>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <VUIThemedText
                      style={{
                        fontSize: 14,
                        fontFamily: "Urbanist-Bold",
                        color: "#576780",

                        marginBottom: 6,
                      }}
                    >
                      {DROPDOWN_FIELD.country.label}
                    </VUIThemedText>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#CDD2D9",
                      paddingVertical: 13,
                      backgroundColor: "white",
                    }}
                  >
                    <Controller
                      name="country"
                      control={control}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <VUIThemedView>
                          <DropdownComponent
                            label={DROPDOWN_FIELD.country.label}
                            list={allCountries.map((country) => ({
                              label: country.name,
                              value: country.isoCode,
                            }))}
                            //@ts-ignore
                            value={value}
                            //@ts-ignore
                            setValue={({ value }) => {
                              onChange(value);
                              setSelectedCountry(value);
                            }}
                            labelField="label"
                            valueField="value"
                            listWithIcon
                            placeholder={DROPDOWN_FIELD.country.placeholder}
                            position="top"
                          />
                        </VUIThemedView>
                      )}
                    />
                  </View>

                  <VUIThemedView
                    style={{
                      backgroundColor: "white",
                      marginTop: 24,
                      flex: 1,
                      flexDirection: "row",
                      gap: 8,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <VUIThemedText
                        style={{
                          fontSize: 14,
                          fontFamily: "Urbanist-Bold",
                          color: "#576780",

                          marginBottom: 6,
                        }}
                      >
                        {DROPDOWN_FIELD.state.label}
                      </VUIThemedText>
                      <View
                        style={{
                          flex: 1,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#CDD2D9",
                          paddingVertical: 13,
                          backgroundColor: "white",
                        }}
                      >
                        <Controller
                          name="state"
                          control={control}
                          render={({
                            field: { onChange, value },
                            fieldState: { error },
                          }) => (
                            <View>
                              <DropdownComponent
                                label={DROPDOWN_FIELD.state.label}
                                list={states?.map((state) => ({
                                  label: state.name,
                                  value: state.isoCode,
                                }))}
                                //@ts-ignore
                                value={value}
                                //@ts-ignore
                                setValue={({ value }) => {
                                  onChange(value);
                                  setSelectedState(value);
                                }}
                                labelField="label"
                                valueField="value"
                                listWithIcon
                                placeholder={DROPDOWN_FIELD.state.placeholder}
                                position="top"
                              />
                            </View>
                          )}
                        />
                      </View>
                    </View>

                    <View style={{ flex: 1 }}>
                      <VUIThemedText
                        style={{
                          fontSize: 14,
                          fontFamily: "Urbanist-Bold",
                          color: "#576780",

                          marginBottom: 6,
                        }}
                      >
                        {DROPDOWN_FIELD.city.label}
                      </VUIThemedText>
                      <View
                        style={{
                          flex: 1,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#CDD2D9",
                          paddingVertical: 13,
                          backgroundColor: "white",
                        }}
                      >
                        <Controller
                          name="city"
                          control={control}
                          render={({
                            field: { onChange, value },
                            fieldState: { error },
                          }) => (
                            <View>
                              <DropdownComponent
                                label={DROPDOWN_FIELD.city.label}
                                list={cities.map((city) => ({
                                  label: city.name,
                                  value: city.name,
                                }))}
                                //@ts-ignore
                                value={value}
                                //@ts-ignore
                                setValue={({ value }) => {
                                  onChange(value);
                                  setSelectedCity(value);
                                }}
                                labelField="label"
                                valueField="value"
                                listWithIcon
                                placeholder={DROPDOWN_FIELD.city.placeholder}
                                position="top"
                              />
                            </View>
                          )}
                        />
                      </View>
                    </View>
                  </VUIThemedView>

                  <VUIInputField
                    label={INPUT_FIELDS.addressline_1.label}
                    placeholder={INPUT_FIELDS.addressline_1.placeholder}
                    style={{ marginTop: 24 }}
                  />
                  <VUIInputField
                    label={INPUT_FIELDS.addressline_2.label}
                    placeholder={INPUT_FIELDS.addressline_2.placeholder}
                    style={{ marginTop: 24 }}
                  />
                  <VUIInputField
                    label={INPUT_FIELDS.pincode.label}
                    placeholder={INPUT_FIELDS.pincode.placeholder}
                    style={{ marginTop: 24, width: 152 }}
                    keyboardType="number-pad"
                  />

                  <VUIThemedView
                    style={{
                      backgroundColor: "white",
                      paddingVertical: 40,
                    }}
                  >
                    <Image
                      style={{
                        height: 6,
                      }}
                      source={Asset.fromModule(
                        require("@/assets/images/local/Union.png")
                      )}
                    />
                  </VUIThemedView>
                  <VUIThemedText
                    style={{
                      color: "#031E47",

                      marginBottom: 16,
                    }}
                  >
                    {UNIVERSAL_TEXT.social_links}
                  </VUIThemedText>
                  <VUIInputField
                    label={INPUT_FIELDS.Social_links.linkedin.label}
                    placeholder={INPUT_FIELDS.Social_links.linkedin.placeholder}
                    style={{ marginTop: 24 }}
                    inputStyle={{ paddingLeft: 45 }}
                    imageStyles={{
                      position: "relative",
                      right: 0,
                      width: 24,
                      height: 24,
                      alignSelf: "flex-start",
                      bottom: 35,
                      marginLeft: 15,
                    }}
                    verifiedImage
                  />
                  <VUIInputField
                    label={INPUT_FIELDS.Social_links.telegram.label}
                    placeholder={INPUT_FIELDS.Social_links.telegram.placeholder}
                    style={{ marginTop: 24 }}
                    inputStyle={{ paddingLeft: 45 }}
                    imageStyles={{
                      position: "relative",
                      right: 0,
                      width: 24,
                      height: 24,
                      alignSelf: "flex-start",
                      bottom: 35,
                      marginLeft: 15,
                    }}
                    verifiedImage
                  />
                  <View style={{ marginTop: 24 }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <VUIThemedText
                        style={{
                          fontSize: 14,
                          fontFamily: "Urbanist-Bold",
                          color: "#576780",

                          marginBottom: 6,
                        }}
                      >
                        {INPUT_FIELDS.Social_links.Website.label}
                      </VUIThemedText>
                      <VUIThemedText
                        style={{
                          fontSize: 14,
                          fontFamily: "Urbanist-Bold",
                          color: "#576780",
                          opacity: 0.6,
                          marginBottom: 6,
                        }}
                      >
                        Optional
                      </VUIThemedText>
                    </View>
                    <VUIInputField
                      placeholder={
                        INPUT_FIELDS.Social_links.Website.placeholder
                      }
                      inputStyle={{ paddingLeft: 45 }}
                      imageStyles={{
                        position: "relative",
                        right: 0,
                        width: 24,
                        height: 24,
                        alignSelf: "flex-start",
                        bottom: 35,
                        marginLeft: 15,
                      }}
                      verifiedImage
                    />
                  </View>
                </ScrollView>
              </View>

              {!isKeyboardVisible && (
                <View style={buttonStyle.buttonContainer}>
                  <VUIButton
                    title={UNIVERSAL_TEXT.preview_company_profile}
                    disabled={false}
                    background="#FFED89"
                    onPress={() => {
                      router.push("/vieworgprofile");
                    }}
                    loadingDuration={1000}
                  />
                </View>
              )}
            </KeyboardAvoidingView>
          </VUIBottomContainer>
        </VUIThemedView>
      </VUIThemedView>
    </VUISafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default companyinfo;
