import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";

export default function Index() {

  type dataType = {
    id: string; // Unique identifier
    title: string; // The text we see in the flatlist
  }

  const DATA: dataType[] = [
    {id: '1', title: 'First'},
    {id: '2', title: 'Second'},
    {id: '3', title: 'Third'},
    {id: '4', title: 'Fourth'}
  ];

  /*
  Declaring a function called selectedList that recieves
  a param of type dataType that we will refer to as 'item'
  I can access the values of item using dot notation 
  */
  const selectedList = (item: dataType) => {
    console.log("Clicked" + item.title)
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <Text>This is where our list will go</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
