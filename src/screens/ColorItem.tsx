// ColorItem.tsx

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteColor, editColor } from "../../store/colorSlice";
import { Text, View, TouchableHighlight } from "react-native";
import { isLightColor } from "../../plugIns/colorUtils";
import { generateColorName } from "../../plugIns/colorNameFinder";
import { getStyles } from "./getStyles";



type ColorItemData = [string, string, boolean];
type itemWidthData = number;
type itemPaddingData = number;

const ColorItem = ({ item, itemWidth, itemPadding }: { item: ColorItemData, itemWidth: itemWidthData, itemPadding: itemPaddingData }) => {
    const dispatch = useDispatch();
    const styles = getStyles(itemWidth, itemPadding);
    const [backgroundColor, setBackgroundColor] = useState(item[0]);

    const handleDelete = () => {
            dispatch(deleteColor(item));
          };
        
          const handleRefresh = () => {
            dispatch(editColor([item, generateColorName()]));
          };

        
    return (
        <View style={styles.colorItem}>
            <View style={{ backgroundColor: item[0], ...styles.colorSwatch }}>
                <Text style={{ color: isLightColor(backgroundColor) ? "black" : "white" }}>
                    {!item[2] ? "close match to " : ""}
                </Text>
                <Text style={{ color: isLightColor(backgroundColor) ? "black" : "white" }}>{item[1]}</Text>
                <View style={styles.bottomBar}>
                    <TouchableHighlight
                        style={{ ...styles.buttonIcon, ...styles.leftBottom }}
                        onPress={handleDelete}>
                        <Text>D</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ ...styles.buttonIcon, ...styles.rightBottom }}
                        onPress={handleRefresh}>
                        <Text>R</Text>
                    </TouchableHighlight>
                </View>

            </View>

        </View>
    )
}

export default ColorItem;