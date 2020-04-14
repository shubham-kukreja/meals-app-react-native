import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const FavouriteScreen = (props) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton} size={25}>
          <Item
            title="Drawer"
            iconName="ios-menu"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return <Text style={style.text}>No Favourite Meals</Text>;
  }
  return <MealList listData={favouriteMeals} navigation={props.navigation} />;
};

const style = StyleSheet.create({
  text : {
    fontFamily : 'open-sans',
    textAlign : 'center',
    flex : 1,
    marginTop : 50
  }
})
export default FavouriteScreen;
