import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.mealContainer}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.item.imgUrl }}
            >
            <Text style={styles.title} numberOfLines={1}>{props.item.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.item.complexity}</Text>
            <Text>{props.item.price}</Text>
            <Text>SHUBHAM</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    height: 300,
    width: "100%",
    // backgroundColor: "white",
  },
  mealContainer: {
    marginVertical: 20,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems : 'center',
    backgroundColor : '#f5f5f5'
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent : 'flex-end'
  },
  title : {
      fontSize : 18,
      fontFamily : 'open-sans-bold',
      color : 'white',
      backgroundColor : 'rgba(0,0,0,0.5)',
      paddingVertical : 5,
      paddingHorizontal : 12
  }
});
