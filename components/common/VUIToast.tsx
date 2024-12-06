import { UNIVERSAL_TEXT } from "@/constants/Properties";
import Toast from "react-native-toast-message";

export const FormValidateToast = () => ({
    email: Toast.show({
        type: "error",
        text1: UNIVERSAL_TEXT.validate_email,
    }),
   
});

export const ApiSuccessToast = (text: string) =>
    Toast.show({
        type: "success",
        text1: text,
        position: "top",
    });
export const ApiErrorToast = (text: string) =>
    Toast.show({
        type: "error",
        text1: text,
        position: "top",
    });
