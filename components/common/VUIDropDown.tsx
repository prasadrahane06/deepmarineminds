import { BACKGROUND_THEME, TEXT_THEME } from "@/constants/Colors";
// import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { StyleSheet, TextStyle ,View} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
// import { useSelector } from "react-redux";
import { VUIThemedText } from "./VUIThemedText";
import { VUIThemedView } from "./VUIThemedView";
// import { t } from "i18next";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";

interface DropdownItem {
    label: string;
    value: string | number;
}
type Props = {
    label: string;
    list: DropdownItem[];
    value: string | number | any | null | undefined;
    setValue: Function;
    labelField?: string;
    valueField?: string;
    style?: any;
    placeholder?: string;
    position?: "auto" | "bottom" | "top";
    listWithIcon?: boolean;
    iconField?: string;
    renderLeftIcon?: any;
    labelStyles?: TextStyle;
    itemLabelStyle?: TextStyle;
    isSearchable?: boolean;
};

const DropdownComponent = ({
    label,
    list,
    value,
    setValue,
    labelField = "label",
    valueField = "value",
    style,
    listWithIcon,
    placeholder,
    position = "bottom",
    iconField = "iconUri",
    renderLeftIcon,
    labelStyles,
    itemLabelStyle,
    isSearchable = true,
}: Props) => {
    console.log(value)
    const { t } = useTranslation();
    const [isFocus, setIsFocus] = useState(false);
    // const theme = useSelector((state: RootState) => state.global.theme) as ThemeType;

    return (
        <View style={style}>
           
            <Dropdown
                style={[
                    styles.dropdown,
                    { backgroundColor: "#ffffff" },
                    isFocus && { borderColor: "#CDD2D9"},
                ]}
                placeholderStyle={[styles.placeholderStyle, { color: TEXT_THEME.primary }]}
                selectedTextStyle={[styles.selectedTextStyle, { color: TEXT_THEME.primary }]}
                inputSearchStyle={[
                    styles.inputSearchStyle,
                    {
                        // backgroundColor: BACKGROUND_THEME[theme].background,
                        color: TEXT_THEME.primary,
                    },
                ]}
                iconStyle={styles.iconStyle}
                data={list}
                search={isSearchable}
                maxHeight={200}
                labelField={labelField || "label"}
                valueField={valueField || "value"}
                placeholder={!isFocus ? placeholder || ` ${t("select_item")}` : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item: any) => {
                    setValue(item);
                    setIsFocus(false);
                }}
                mode="modal"
                keyboardAvoiding={true}
                // dropdownPosition={position}
                renderLeftIcon={
                    renderLeftIcon
                        ? () => (
                              <Image
                                  style={{
                                      borderRadius: 50,
                                      width: 30,
                                      height: 30,
                                      marginRight: 3,
                                  }}
                                  source={{
                                      // @ts-ignore
                                      uri: list.find((x: any) => x[valueField] === value)[
                                          iconField
                                      ],
                                  }}
                              />
                          )
                        : () => null
                }
                renderItem={(item) =>
                    listWithIcon ? (
                        <RenderItemWithIcon
                            item={item}
                            labelField={labelField}
                            iconField={iconField}
                            itemLabelStyle={itemLabelStyle}
                        />
                    ) : (
                        <RenderDefaultItem item={item} labelField={labelField} />
                    )
                }
                containerStyle={{
                    height: 300,
                    borderWidth: 1,
                    borderColor: "#CDD2D9",
                    borderRadius: 10,
                }}
            />
        </View>
    );
};

export default DropdownComponent;

interface RenderItemWithIconProps {
    item: any;
    labelField: any;
    iconField: any;
    itemLabelStyle: any;
    theme?: any;
}

const RenderItemWithIcon = ({
    item,
    labelField,
    iconField,
    itemLabelStyle,
    theme,
}: RenderItemWithIconProps) => (
    <VUIThemedView
        style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
            paddingVertical: 5,
            paddingHorizontal:15,
            backgroundColor: "#fffffff",
        }}
    >
        <Image
            style={{
                borderRadius: 50,
                width: 30,
                height: 30,
                marginRight: 3,
            }}
            source={item[iconField]}
        />
        <VUIThemedText style={[itemLabelStyle]}>{item[labelField]}</VUIThemedText>
    </VUIThemedView>
);

const RenderDefaultItem = ({ item, labelField }: any) => (
    <VUIThemedText style={styles.renderDefaultItem}>{item[labelField]}</VUIThemedText>
);
const styles = StyleSheet.create({
    dropdown: {
        paddingHorizontal: 5,
        flex:1,
        
    },

    icon: {
        marginRight: 5,
    },
    label: {
        fontSize: 14,
        fontFamily: "Urbanist-Bold",
    
        marginBottom: 6,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 50,
        fontSize: 16,
        borderColor: "#CDD2D9",
        // borderWidth: 1,
    },
    renderDefaultItem: {
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});
