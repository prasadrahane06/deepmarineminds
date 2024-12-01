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

export const VUIBottomContainer: React.FC<UIBottomContainer> = ({
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
    width: "100%",
    bottom: 0,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    // opacity: 1,
  },
});
