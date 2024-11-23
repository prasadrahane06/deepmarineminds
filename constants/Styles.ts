import { StyleSheet, StatusBar } from "react-native";
import { APP_THEME } from "./Colors";
export const defaultStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
export const initialPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
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
  button: {
    width: 312,
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 4,
    borderRadius: 12,
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
    lineHeight: 24,
    textAlign: "center",
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
    position: "absolute",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "gray",
    width: "100%",
    opacity: 0.5,
    display: "none",
    zIndex: 1000,
  },
});
export const imageStyles = StyleSheet.create({
  defaultIcon: {
    height: 50,
    width: 50,
  },
  defaultPreview: {
    width: 312,
    height: 382,
    borderRadius: 12,
  },
});
