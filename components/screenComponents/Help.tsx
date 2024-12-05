import VUIAccordion from "@/components/common/VUIAccordion";
import { VUIThemedText } from "@/components/common/VUIThemedText";
import { VUIThemedView } from "@/components/common/VUIThemedView";
import { faqs } from "@/constants/dummydata/help";
import { UNIVERSAL_TEXT } from "@/constants/Properties";
// import { useLangTransformSelector } from "@/customHooks/useLangTransformSelector";
// import { RootState } from "@/redux/store";

import { ScrollView, StyleSheet } from "react-native";
// import { useSelector } from "react-redux";

const Help = () => {
   
   
   
    

  

    const faqData = faqs;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <VUIThemedView style={styles.screen}>
                <VUIThemedText style={styles.header}>{UNIVERSAL_TEXT.frequent_questions}</VUIThemedText>
                {faqData.map((item, index) => (
                    <VUIAccordion key={index} title={item.question}>
                        <VUIThemedView style={styles.answerContainer}>
                            <VUIThemedText style={styles.answer}>{item.answer}</VUIThemedText>
                        </VUIThemedView>
                    </VUIAccordion>
                ))}
            </VUIThemedView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        fontSize: 20,
        fontWeight: "700",
        padding:10,
        paddingBottom: 20,
        color: "#031E47",
        textAlign:"center",
        backgroundColor: "white",

        // color: APP_THEME.light.ternary.first,
    },
    container: {
        flexGrow: 1,
        backgroundColor: "white",
    },
    question: {
        color: "green",
        backgroundColor: "white",

    },
    answerContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "white",

    },
    answer: {
        flex: 1,
        fontSize: 14,
        color:"#576780",
        marginLeft: 2,
        backgroundColor: "white",

    },
});

export default Help;
