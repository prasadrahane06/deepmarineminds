import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VUIThemedView } from './VUIThemedView'
import {Image} from "expo-image"
import {Asset} from "expo-asset"
const VUIBgImage = () => {
  return (
    <VUIThemedView
    style={{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      position: "relative",
      backgroundColor:"transparent"
    }}
  >
    
    <Image
      source={Asset.fromModule(
        require("@/assets/images/local/splaswave1.png")
      )}
      style={{ width: "50%", height: 100, opacity: 0.1 }}
    />
    <Image
      source={Asset.fromModule(
        require("@/assets/images/local/splaswave2.png")
      )}
      style={{ width: "50%", height: 100, opacity: 0.1 }}
    />
    </VUIThemedView>
  )
}

export default VUIBgImage

