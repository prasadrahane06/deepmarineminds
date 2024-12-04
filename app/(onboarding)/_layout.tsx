import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const OnboardingLayout: React.FC = () => {
  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen
          name="admininfo"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="createorgprofile"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="companyinfo"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b82f6",
  },
});

export default OnboardingLayout;
