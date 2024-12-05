import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { VUIThemedText } from "../common/VUIThemedText";
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import { VUIThemedView } from "../common/VUIThemedView";
import VUIBackButton from "../common/VUIBackButton";
import VUIButton from "../common/VUIButton";
import { UNIVERSAL_TEXT } from "@/constants/Properties";

interface HomeCardProps {
    Imagepath?: object;
    title?: string;
    subtitle?: string;
    buttontext?: string;
    containerstyles?:object;
  
  }
const HomeCard: React.FC<HomeCardProps> = ({Imagepath ,title ,subtitle , buttontext,containerstyles}) => {
  return (
    <View
    style={[
        {
          width: "100%",
          flex: 1,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "transparent",
          backgroundColor: "#003E9B",
          paddingHorizontal: 24,
          paddingVertical: 30,
          paddingBottom: 24,
          marginTop: 32,
          alignItems: "center",
          justifyContent: "center",
        },
        containerstyles, 
      ]}
      
    >
      <VUIThemedView
        style={{
          backgroundColor: "transparent",
          marginTop: 32,
        }}
      >
        <Image
          style={{
            width: 116,
            height: 116,

            borderRadius: 100,
          }}
          source={Imagepath}
          contentFit="contain"
        />
      </VUIThemedView>
      <View
        style={{
          marginTop: 17,
        }}
      >
        <VUIThemedText
          style={{
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Urbanist-Bold",
            color:"#FFFFFF"
          }}
        >
         {title}
        </VUIThemedText>

       
      </View>
      <View style={{ marginTop: 10 }}>
        <VUIThemedText
          style={{
            fontSize: 12,
            fontWeight: "500",
            fontFamily: "Urbanist-regular",
            color: "#FFFFFF",
            opacity:0.8
          }}
        >
            {subtitle}
        </VUIThemedText>
      </View>
   <View style={{width:"100%",marginTop:32}}>
   <VUIButton
            title={buttontext}
            disabled={false}
            onPress={() => {
              
            }}
            loadingDuration={1000}
            
            background="#FFED89"
          />
   </View>
    </View>
  );
};

export default HomeCard;
