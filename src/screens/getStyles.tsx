import { StyleSheet } from "react-native";

export const getStyles = (itemWidth: number, itemPadding: number) => {
    return StyleSheet.create({
        colorItem: {
            alignItems: "center",
            justifyContent: "center",
            width: itemWidth,
            marginBottom: itemPadding,
            marginRight: itemPadding,
        },
        colorSwatch: {
            height: itemWidth,
            width: '100%',
            alignSelf: "center",
        },
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            alignSelf: "center",
            justifyContent: "center",
            fontSize: 18,
            marginBottom: 5,
        },
        addButtonContainer: {
            position: "absolute",
            bottom: 5,
            backgroundColor: 'rgba(208, 223, 226, 0.71)',
            width: '100%',
            alignItems: 'center',
            padding: 5,
        },
        button: {
            alignItems: "center",
            backgroundColor: "#007AFF",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            width: 250,
        },
        buttonText: {
            color: "white",
            fontSize: 20,
        },
        colorInfo: {
            padding: 10,
        },
        bottomBar: {
            flexDirection: 'row',
            position: "absolute",
            bottom: 5,
            width: '100%',
        },
        buttonIcon: {
            backgroundColor: " ",
            paddingVertical: 5,
            borderRadius: 5,
            alignItems: 'center',
            width: 30,
        },
        leftBottom: {
            left: 5,
        },
        rightBottom: {
            position: "absolute",
            right: 5,
        },
    });
};
