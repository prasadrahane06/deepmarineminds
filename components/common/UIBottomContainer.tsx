import { APP_THEME } from "@/constants/Colors";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface UIBottomContainer {
  style?: object;
  children?: React.ReactNode;
}

export const UIBottomContainer: React.FC<UIBottomContainer> = ({
  style,
  children,
  ...otherProps
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: APP_THEME.background,
        },
        styles.container,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: wp("100%"),
    position: "absolute",
    bottom: 0,
    paddingVertical: hp("5%"),
    paddingHorizontal: wp("6%"),
    borderTopLeftRadius: wp("6%"),
    borderTopRightRadius: wp("6%"),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    opacity: 1,
  },
});
