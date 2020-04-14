import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const GridItem = (props) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21)
    TouchableComp = TouchableNativeFeedback;
  return (
    <View style={styles.gridItem}>
      <TouchableComp onPress={props.navigate} style={{ flex: 1 }}>
        <View
          style={{ ...styles.gridContainer, backgroundColor: props.item.color }}
        >
          <Text style={styles.gridTitle} numberOfLines={2}>
            {props.item.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    height: 150,
    flex: 1,
    borderRadius: 10
  },
  gridContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    elevation: 5,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  gridTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
});
export default GridItem;
