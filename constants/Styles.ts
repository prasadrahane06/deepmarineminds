import { StyleSheet, StatusBar } from "react-native";
import { APP_THEME } from "./Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const defaultStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
export const initialPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  iosIndexHeader: {
    top: -71,
    width: "100%",
    height: 208,
    backgroundColor: "transparent",
    borderRadius: 104,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  indexHeader: {
    top: -75,

    // @ts-ignore
    height: StatusBar.currentHeight + 130,
    backgroundColor: "transparent",
    borderRadius: 100,
  },

  button: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 3,
  },
  iosTitle: {
    marginLeft: -87,
    top: 150,
    fontSize: 18,
    fontWeight: "700",
    // fontFamily: font,
    // color: APP_THEME.light.gray,
    lineHeight: 21,
    left: "50%",
    position: "absolute",
  },
  title: {
    top: 120,
    fontSize: 18,
    fontWeight: "700",
    // fontFamily: font,
    // color: APP_THEME.light.gray,
    lineHeight: 21,
    width: "100%",
    textAlign: "center",
    position: "absolute",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  circularViewPosition: {
    height: 150,
    width: 150,
    borderCurve: "circular",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  optionLabel: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLayout: {
    width: "100%",
    height: 20,
    marginHorizontal: "auto",
    borderRadius: 50,
    paddingBottom: 25,
  },
});
export const buttonStyle = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(205, 210, 217, 0.5)",
    shadowColor: "#031530",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp("6.4%"),
    paddingVertical: 16,
    flex: 1,
    position: "absolute",
    bottom: 0,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 56,
    borderRadius: wp("3.5%"),
    opacity: 1,
  },
  buttonInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 5,
    width: 680,
    height: 40,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
  },
  regularText: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    justifyContent: "flex-start",
  },
});

export const loaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "transparent",
    width: "100%",

    opacity: 1,
    zIndex: 1000,
  },
});
export const imageStyles = StyleSheet.create({
  defaultIcon: {
    width: wp("35%"),
    height: wp("35%"),
    opacity: 0.9,
  },
  defaultPreview: {
    width: wp("100%"),
    height: hp("50%"),
    borderRadius: 12,
  },
});
export const inputFieldStyle = StyleSheet.create({
  container: {
    // backgroundColor: "#ffffff",
  },

  label: {
    fontSize: 14,
    fontFamily: "Urbanist-Bold",
    color:"#576780",
    marginBottom: 6,
  },
  input: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Urbanist-regular",
    width: "100%",
    height: 48,
    paddingHorizontal: 10,
    borderRadius: wp("3.5%"),
    borderWidth: 1,
    borderColor: "#CDD2D9",
    opacity: 1,
   
  },
  multilineInput: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Urbanist-regular",
    width: "100%",
    height: 372,
    paddingHorizontal: 15,
    borderRadius: wp("3.5%"),
    borderWidth: 1,
    borderColor: "#CDD2D9",
    opacity: 1,
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: "red",
    width: wp("85%"),
    height: hp("6.5%"),
    paddingHorizontal: wp("3%"),
    borderRadius: wp("2.5%"),
    opacity: 1,
  },
  error: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
    marginLeft: 5,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  verifiedIcon: {
    position: "absolute",
    right: wp("7%"),
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});
