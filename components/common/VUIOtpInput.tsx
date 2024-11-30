import { APP_THEME } from "@/constants/Colors";
// import { RootState } from "@/redux/store";
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
// import { useSelector } from "react-redux";

const VUIOTPInput = ({ length, onChange, disabled, autoFocus }: any) => {
    // const theme = useSelector((state: RootState) => state.global.theme);
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputs = useRef([]);

    const handleChange = (text: any, index: any) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < length - 1) {
            // @ts-ignore
            inputs.current[index + 1].focus();
        }
        if (onChange) {
            onChange(newOtp.join(""));
        }
    };

    const handleKeyPress = (e: any, index: any) => {
        if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
            // @ts-ignore

            inputs.current[index - 1].focus();
        }
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={[styles.container]}>
                {otp?.map((digit, index) => (
                    <TextInput
                        key={index}
                        autoFocus={index === 0 && autoFocus}
                        // @ts-ignore
                        ref={(ref) => (inputs.current[index] = ref)}
                        style={[
                            styles.input,
                            {
                                borderColor: APP_THEME.gray,
                                shadowColor: APP_THEME.gray,
                            },
                            disabled && {
                                borderColor: "gray",
                                shadowColor: "gray",
                                opacity: 0.5,
                            },
                        ]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        editable={!disabled}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 45,
        height: 48,
        borderWidth: 1,
        // borderColor: APP_THEME.primary.first, //"#7A827A",
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        elevation: 5,
        // IOS
        // shadowColor: APP_THEME.primary.first,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
});

export default VUIOTPInput;
