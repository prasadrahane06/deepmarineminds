import { imageStyles } from "@/constants/Styles";
import React from "react";
import { Image } from "expo-image";
import { Asset } from "expo-asset";

const VUIImage = ({ path, style, preview, icon, ...props }: any) => {
  let source = null;

  if (typeof path === "object") {
    if (path?.uri) {
      source = path?.uri;
    } else if (path?.localUri) {
      source = path?.localUri;
    } else {
      source = null;
    }
  } else {
    source = path;
  }

  return (
    <Image
      source={{
        uri:
          source ||
          Asset.fromModule(require("@/assets/images/local/no_image.png"))
            ?.uri ||
          Asset.fromModule(require("@/assets/images/local/no_image.png"))
            ?.localUri,
      }}
      style={
        icon
          ? [imageStyles.defaultIcon, style]
          : [imageStyles.defaultPreview, style]
      }
      {...props}
      contentFit="contain"
    />
  );
};

export default VUIImage;
