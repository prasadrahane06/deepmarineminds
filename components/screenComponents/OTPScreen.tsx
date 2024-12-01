// import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
// import { useSelector } from "react-redux";
import VUIOTPInput from "../common/VUIOtpInput";
import { VUIThemedText } from "../common/VUIThemedText";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OTPScreen = ({
  length,
  onChange,
  onBackToInput,
  inputValue,
  onResendOtp,
  changeLabel,
  disabled,
  autoFocus,
}: any) => {
  // const theme = useSelector((state: RootState) => state.global.theme);
  // const [otp, setOtp] = useState(Array(length).fill(""));
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendOtp = () => {
    setTimer(30);
    setCanResend(false);
    onResendOtp();
  };

  return (
    <View style={styles.container}>
      <VUIThemedText
        style={[
          styles.changeText,
          // { color: theme === "light" ? "#007aff" : "#66CCFF" },
        ]}
      >
        {changeLabel || ""}
      </VUIThemedText>
      <View style={styles.AUIOTPInput}>
        <VUIOTPInput
          length={length}
          onChange={onChange}
          disabled={disabled}
          autoFocus={autoFocus}
        />
      </View>

      {canResend ? (
        <TouchableOpacity
          onPress={handleResendOtp}
          style={styles.resendOtpText}
        >
          <VUIThemedText
            style={{ fontSize: 14, color: "#576780", lineHeight: hp("2.5%") }}
          >
            Did't receive the OTP?{"  "}
            <VUIThemedText
              style={[
                styles.resendLink,
                disabled && { opacity: 0.5, lineHeight: hp("2.5%") },
              ]}
            >
              Resend OTP
            </VUIThemedText>
          </VUIThemedText>
        </TouchableOpacity>
      ) : (
        <VUIThemedText style={styles.resendOtpText}>
          {`Resend OTP in 00:${timer < 10 ? `0${timer}` : timer}`}
        </VUIThemedText>
      )}
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  changeText: {
    fontSize: 14,
    fontFamily: "Urbanist-regular",
    fontWeight: "700",
    color: "#576780",
  },
  resendOtpText: {
    marginTop: 61,
    fontSize: 14,
    fontFamily: "Urbanist-regular",
    fontWeight: "600",
    color: "#576780",
  },
  resendLink: {
    fontSize: 14,
    fontFamily: "Urbanist-regular",
    fontWeight: "700",
    color: "#1269EB",
    textDecorationLine: "underline",
  },
  AUIOTPInput: {
    marginTop: 12,
  },
});
