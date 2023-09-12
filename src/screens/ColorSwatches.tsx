// ColorSwatches.tsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../store/colorSlice";
import { Text, View, TouchableOpacity, FlatList, Dimensions, StatusBar } from "react-native";
import ColorItem from "./ColorItem";
import { getStyles } from "./getStyles";
import { isLightColor } from "../../plugIns/colorUtils";
// StatusBar.setHidden(true);

// Define a type for your color items
type ColorItemData = [string, string, boolean]; // Adjust the structure as needed

const ColorSwatches: React.FC = () => {
  const color: ColorItemData[] = useSelector((state: any) => state.color.value); // Replace 'any' with your actual state type
  const dispatch = useDispatch();

  const numColumns = 3;
  const itemPadding = 0;
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = ((screenWidth - (numColumns - 1) * itemPadding) / numColumns) - 10;
  const styles = getStyles(itemWidth, itemPadding);

  const renderColorItem = ({ item }: { item: ColorItemData }) =>{
    return(
<ColorItem item={item} itemWidth={itemWidth} itemPadding={itemPadding} />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        keyExtractor={(item, index) => item[0]} // Replace with your actual key
        data={color}
        numColumns={numColumns}
        renderItem={renderColorItem}
      />
      <View style={styles.addButtonContainer}>
        <Text style={styles.text}>Add more colors</Text>
        <TouchableOpacity onPress={() => dispatch(setColor())} style={styles.button}>
          <Text style={styles.buttonText}>Generate Color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ColorSwatches;

