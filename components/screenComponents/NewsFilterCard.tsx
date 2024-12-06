import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import { newsfilterdata, newsData } from "@/constants/dummydata/newsfilterdata";
import { router } from 'expo-router';
import { VUIThemedText } from '../common/VUIThemedText';
const Data = newsfilterdata;
const timesAgo = "2 mins ago";
const images = {
  verified: Asset.fromModule(require("@/assets/images/local/news1.png")),
  linkedin: Asset.fromModule(require("@/assets/icons/linkedIn.png")),
  share: Asset.fromModule(require("@/assets/icons/Share.png")),
  website: Asset.fromModule(require("@/assets/icons/website.png")),
};


interface FilterCardProps {
  containerstyles?: object;
  textstyles?: object;
  filter: string;
  count: number;
  selected?: boolean;
  onPress?: () => void;
}

const FilterListComponent: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState(''); // Manage selection state

  const handlePress = (filter: string) => {
    setSelectedFilter(filter); // Update selected filter
  };

  const NewsFilterCard: React.FC<FilterCardProps> = ({
    containerstyles,
    textstyles,
    filter,
    count,
    selected,
    onPress,
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.container, containerstyles, selected ? styles.selected : {}]}
        >
          <Text style={[styles.text, textstyles]}>{filter}</Text>
          <Text style={[styles.text, textstyles]}>({count})</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={Data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}

        renderItem={({ item }) => (
          <View key={item.id} style={{ paddingHorizontal: 8 }}>
            <NewsFilterCard
              filter={item.title}
              count={item.count}
              selected={item.title === selectedFilter}
              onPress={() => handlePress(item.title)}
            />

          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ paddingHorizontal: 24, marginTop: 27, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Urbanist-regular", fontSize: 10, color: "#576780", fontWeight: "700", letterSpacing: 0.5 }} >{timesAgo.toUpperCase()}</Text>
      </View>

      <View >
        {newsData.map((item) => (
          <View key={item.id} style={{ marginBottom: 24 }} >
            <NewsCard
              header={item.title}
              subheader={item.subtitle}
              imagepath={item.imagepath}
              info={item.info}
            />      
          </View>
        ))}

      </View>

      <TouchableOpacity onPress={()=>{router.push("/news")}}  style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:4}}>
<VUIThemedText style={{color:"#1269EB"}}>View all</VUIThemedText>
<Image
source={Asset.fromModule(require("@/assets/icons/arrowleft.png"))}
style={{width:16 ,height:16}}
/>

</TouchableOpacity>
      </View>
        

  );
};

interface NewsCardProp {
  imagepath?: object;
  header?: string;
  subheader?: string;
  info?: string;

  onPress?: () => void;
}
export const NewsCard: React.FC<NewsCardProp> = ({ imagepath, header, subheader, info }) => {
  return (
    <View style={{  flexDirection: "row", gap: 16, height: 119, paddingHorizontal: 24 }}>
      <View style={{  alignItems: "center", justifyContent: "center" }}>
        <Image
          source={imagepath}
          style={{ width: 100, height: 118, borderRadius: 8 }}
        />
      </View>
      <View style={{  flex: 1, flexDirection: "column", gap: 4, paddingVertical: 4 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#576780", fontWeight: "700", fontSize: 10, fontFamily: "Urbanist-regular" }}>{header}</Text>
          <Image
            source={images.share}
            style={{ width: 20, height: 20, borderRadius: 8 }}
          />
        </View>

        <Text style={{ color: "#031E47", fontWeight: "600", fontSize: 14, fontFamily: "Urbanist-Bold" }}
          numberOfLines={2}>{subheader}</Text>
        <Text style={{ color: "#878E99", fontWeight: "500", fontSize: 12, fontFamily: "Urbanist-regular" }}
          numberOfLines={2}
        >{info}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    color: '#031E47',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
  },
  selected: {
    borderColor: '#7CD8F7',
    backgroundColor: "#e8fbfd",

  },
});

export default FilterListComponent;
