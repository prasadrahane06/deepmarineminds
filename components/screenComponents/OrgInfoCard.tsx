import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { VUIThemedText } from "../common/VUIThemedText";
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import { VUIThemedView } from "../common/VUIThemedView";
const OrgInfoCard = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 430,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#CDD2D980",
        backgroundColor: "#fdfdf8",
        paddingBottom: 24,
        marginTop: 32,
      }}
    >
      <View
        style={{ backgroundColor: "#F9F4EE", height: 43, position: "relative",        borderTopLeftRadius: 12,borderTopRightRadius: 12
        }}
      >
        <VUIThemedView
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            paddingHorizontal: 24,
            paddingVertical: 22,
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#CDD2D980",
              borderRadius: 8,
            }}
            source={Asset.fromModule(
              require("@/assets/icons/profile-rectangle.png")
            )}
            contentFit="contain"
          />
        </VUIThemedView>
      </View>
      <View
        style={{
          marginTop: 37,
          flexDirection: "column",
          gap: 8,
          paddingHorizontal: 24,
        }}
      >
        <View style={{ flexDirection: "row", gap: 7 }}>
          <VUIThemedText
            style={{
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Urbanist-Bold",
            }}
          >
            Courdomichalis maritime
          </VUIThemedText>
          <Image
            source={Asset.fromModule(
              require("@/assets/icons/external-link.png")
            )}
            style={{ width: 16, height: 16 }}
            contentFit="contain"
          />
        </View>

        <VUIThemedText
          style={{
            fontSize: 14,
            fontWeight: "500",
            fontFamily: "Urbanist-regular",
          }}
        >
          Portsmouth, UK
        </VUIThemedText>
      </View>
      <View style={{ marginTop: 16, paddingHorizontal: 24 }}>
        <VUIThemedText
          style={{
            fontSize: 14,
            fontWeight: "500",
            fontFamily: "Urbanist-regular",
            color: "#495057",
          }}
        >
          280 modern ships, 11.9 million TEU (Twenty-foot Equivalent Unit)
          transported per year, 16,600 motivated employees in more than 400
          offices in 140 countries. Hapag-Lloyd is a leading global liner
          shipping company and a powerful partner for you.
        </VUIThemedText>
      </View>
      <View
        style={{
          marginTop: 32,
          flex: 1,
          flexDirection: "column",
          gap: 16,
          paddingHorizontal: 24,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
          <Image
            source={Asset.fromModule(require("@/assets/icons/phone.png"))}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
          <VUIThemedText
            style={{
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "Urbanist-bold",
              color: "#031E47",
            }}
          >
            +91 1234567890
          </VUIThemedText>
        </View>
        <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
          <Image
            source={Asset.fromModule(require("@/assets/icons/telegraph.png"))}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
          <VUIThemedText
            style={{
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "Urbanist-bold",
              color: "#031E47",
            }}
          >
            t.me/s/courdomichalismaritime
          </VUIThemedText>
        </View>
        <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
          <Image
            source={Asset.fromModule(require("@/assets/icons/email.png"))}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
          <VUIThemedText
            style={{
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "Urbanist-bold",
              color: "#031E47",
            }}
          >
            josef@courdomichalismaritime.com
          </VUIThemedText>
        </View>
      </View>
    </View>
  );
};

export default OrgInfoCard;
