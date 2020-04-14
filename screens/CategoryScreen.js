import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy";
import { TouchableOpacity } from "react-native-gesture-handler";
import GridItem from "../components/GridItem";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


const CategoryScreen = (props) => {
  const renderGridItem = (itemGrid) => {
    return (
      <GridItem
        item={itemGrid.item}
        navigate={() => {
          props.navigation.navigate("CategoryMealScreen", {
            id: itemGrid.item.id,
            title: itemGrid.item.title,
          });
        }}
      />
    );
  };
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton} size={25} >
          <Item title="Drawer" iconName="ios-menu" onPress={() => props.navigation.toggleDrawer()} />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gridItem: {
    margin: 15,
    height: 150,
    width: 200,
  },
});
export default CategoryScreen;
