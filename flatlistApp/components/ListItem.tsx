import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";

// Add declaration for dataType
// later we will learn how to do this in one spot and import it
import { dataType } from "@/data/appData";


// Declare data type for props here
type propsDataType = {
  item: dataType;
  isSelected: boolean; // Will determine how styling should look
  onPress: (item: dataType) => void; // This is going to replace what was selectedList
}


const ListItem: React.FC<propsDataType> = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style = {[styles.titleContainer, 
        {
          backgroundColor: isSelected ? colors.primary : colors.secondary
        }
      ]}>
      <Text style = {styles.titleText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "lightblue"
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
