import { Tabs } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { Asset } from "expo-asset";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const images = {
  homeActive: Asset.fromModule(require("@/assets/icons/HomeActive.png")),
  homeInactive: Asset.fromModule(require("@/assets/icons/HomeInactive.png")),
  JobsActive: Asset.fromModule(require("@/assets/icons/JobsActive.png")),
  JobsInactive: Asset.fromModule(require("@/assets/icons/JobsInactive.png")),
  NewsActive: Asset.fromModule(require("@/assets/icons/NewsActive.png")),
  NewsInactive: Asset.fromModule(require("@/assets/icons/NewsInactive.png")),
  CandidatesActive: Asset.fromModule(
    require("@/assets/icons/CandidatesActive.png")
  ),
  CandidatesInactive: Asset.fromModule(
    require("@/assets/icons/CandidatesInactive.png")
  ),
  ProfileActive: Asset.fromModule(require("@/assets/icons/ProfileActive.png")),
  ProfileInactive: Asset.fromModule(
    require("@/assets/icons/ProfileInactive.png")
  ),
};

interface TabIconProps {
  icon: any;
}

const TabIcon: React.FC<TabIconProps> = ({ icon }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: wp("7%"),
          height: hp("4%"),
        }}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={focused ? images.homeActive : images.homeInactive} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#1269EB" : "#576780" },
              ]}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={focused ? images.JobsActive : images.JobsInactive} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#1269EB" : "#576780" },
              ]}
            >
              Jobs
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={focused ? images.NewsActive : images.NewsInactive} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#1269EB" : "#576780" },
              ]}
            >
              News
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="candidates"
        options={{
          title: "Candidates",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                focused ? images.CandidatesActive : images.CandidatesInactive
              }
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#1269EB" : "#576780" },
              ]}
            >
              Candidates
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={focused ? images.ProfileActive : images.ProfileInactive}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#1269EB" : "#576780" },
              ]}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: wp("100%"),
    height: hp("9%"),
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(205, 210, 217, 0.5)",
    shadowColor: "#031530",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: wp("3.5%"),
    fontWeight: "500",
    color: "#576780",
    lineHeight: hp("2.5%"),
    letterSpacing: wp("0.07%"),
    textAlign: "center",
  },
});
