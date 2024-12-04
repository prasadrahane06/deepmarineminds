import { Controller } from "react-hook-form";
import { VUIThemedText } from "../common/VUIThemedText";
import { VUIThemedView } from "../common/VUIThemedView";
import { INPUT_FIELDS } from "@/constants/Properties";
import VUIInputField from "../common/VUIInputField";
import DropdownComponent from "../common/VUIDropDown";
import { APP_THEME } from "@/constants/Colors";
import { countriesData } from "@/constants/countriesData";
import { View } from "react-native";
import { ThemeContext } from "@react-navigation/native";
import { useEffect } from "react";

export const ContactNumberField = ({ label, control }: any) => {
  // const theme = useSelector((state: RootState) => st`ate.global.theme);
  useEffect(() => {
    countriesData.map((x: any) => {
        x.iconUri = `https://flagcdn.com/w320/${x.code.toLowerCase()}.png`;
        return x;
    });
}, []);
  return (
    <VUIThemedView style={{ backgroundColor: "#ffffff" }}>
      {label && (
        <VUIThemedText
          style={{
            marginBottom: 5,
            fontSize: 16,
            fontWeight: "semibold",
            letterSpacing: -0.32,
            color: APP_THEME.gray,
          }}
        >
          {label}
        </VUIThemedText>
      )}
      <VUIThemedView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          marginTop: 24,
        }}
      >
        <View style={{ flex: 1 ,flexDirection:"row", justifyContent:"space-between" }}>
          <VUIThemedText
            style={{
              fontSize: 14,
              fontFamily: "Urbanist-Bold",
              color: "#576780",

              marginBottom: 6,
            }}
          >
            Mobile number
          </VUIThemedText>
          <VUIThemedText
            style={{
              fontSize: 14,
              fontFamily: "Urbanist-Bold",
              color: "#576780",
opacity:0.6,
              marginBottom: 6,
            }}
          >
            Optional
          </VUIThemedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems:"center",
            width: "100%",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#CDD2D9",
            opacity: 1,
            padding:2,

          }}
        >
          <Controller
            name="phoneCode"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <DropdownComponent
                  style={{
                    flex: 1,
                    // Adjust the flex value to control how much space it takes up
                  }} // @ts-ignore
                  list={countriesData}
                  // @ts-ignore
                  value={value}
                  setValue={({ dialling_code }: { dialling_code: string }) =>
                    onChange(dialling_code)
                  }
                  labelField="dialling_code"
                  valueField="dialling_code"
                  listWithIcon
                  renderLeftIcon
                  label=""
                />
              );
            }}
          />
          <View style={{ borderWidth: 0.7,
    borderColor: "#CDD2D9", height:25}}></View>
          <Controller
            name="input"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <VUIInputField
                  style={{ flex: 2 }}
                  inputStyle={{borderWidth:0}}
                  value={value}
                  onChangeText={onChange}
                  placeholder={INPUT_FIELDS.phone.placeholder}
                  keyboardType="numeric"
                  autoFocus={true}
                />
              );
            }}
          />
        </View>
      </VUIThemedView>
      <Controller
        name="input"
        control={control}
        render={({ fieldState: { error } }) => {
          return (
            <VUIThemedText
              style={{
                position: "absolute",
                color: "red",
                fontSize: 14,
                marginTop: 52,
              }}
            >
              {error?.message || ""}
            </VUIThemedText>
          );
        }}
      />
    </VUIThemedView>
  );
};
