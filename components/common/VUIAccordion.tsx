import VUIImage from "@/components/common/VUIImage";
import { APP_THEME, TEXT_THEME } from "@/constants/Colors";
// import { RootState } from "@/redux/store";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
// import { useSelector } from "react-redux";
import { VUIThemedText } from "./VUIThemedText";
import { VUIThemedView } from "./VUIThemedView";

interface AccordionProps {
    title: string;
    children: ReactNode;
    icon?: any;
    style?: ViewStyle;
    innerStyle?: any;
    showEditIcon?: boolean;
    onEditClick?: () => void;
}

const VUIAccordion: React.FC<AccordionProps> = ({
    title,
    children,
    icon,
    style,
    innerStyle,
    showEditIcon,
    onEditClick,
}) => {
    // const theme = useSelector((state: RootState) => state.global.theme);
    const [expanded, setExpanded] = useState(false);

    return (
        <VUIThemedView style={[styles.accordionContainer, style]}>
            <TouchableOpacity
                style={[
                    styles.accordionHeader,
                    expanded && styles.accordionHeaderExpanded,
                    innerStyle,
                ]}
                onPress={() => setExpanded(!expanded)}
            >
                <VUIThemedView style={styles.accordionTitle}>
                    {icon && <VUIImage style={styles.icon} path={icon} contentFit="cover" />}
                    <VUIThemedText style={styles.accordionTitleText}>{title}</VUIThemedText>
                </VUIThemedView>

                <VUIThemedView style={styles.iconContainer}>
                  
                    <Ionicons
                        name={expanded ? "remove-outline" : "add-outline"}
                        size={24}
                        color={TEXT_THEME.primary}
                    />
                </VUIThemedView>
            </TouchableOpacity>
            {expanded && <VUIThemedView style={styles.accordionContent}>{children}</VUIThemedView>}
        </VUIThemedView>
    );
};

const styles = StyleSheet.create({
    accordionContainer: {
        borderWidth: 2,
        borderColor: "#CDD2D980",
        borderRadius: 8,
        marginBottom: 12,
        overflow: "hidden",
        backgroundColor: "transparent",

        // backgroundColor: APP_THEME.background,
        // backgroundColor: "#f9f9f9", 
    },
    accordionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    accordionHeaderExpanded: {
        // borderBottomWidth: 2,
        // borderBottomColor: "#ddd",
    },
    accordionTitle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    accordionTitleText: {
        width: "90%",
        padding: 10,
        fontSize: 14,
        fontWeight: "600",
        color:"#031E47"
    },
    accordionContent: {
        backgroundColor: "transparent",

        padding: 10,
    },
    iconContainer: { flexDirection: "row", gap: 20 ,        backgroundColor: "transparent",
    },
    icon: {
        
        width: 24,
        height: 24,
    },
});
export default VUIAccordion;
