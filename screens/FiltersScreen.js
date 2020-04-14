import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { setFilter } from "../store/actions/meals";
import { useDispatch } from "react-redux";

const FiltersScreen = (props) => {
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarain, setisVegetarain] = useState(false);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    const filter = {
      isGlutenFree: isGlutenFree,
      isLactoseFree: isLactoseFree,
      isVegan: isVegan,
      isVegetarain: isVegetarain,
    };
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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton} size={25}>
          <Item
            title="Drawer"
            iconName="md-save"
            onPress={() => {
              dispatch(setFilter(filter));
              props.navigation.navigate('Meals')
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [
    props.navigation,
    dispatch,
    isGlutenFree,
    isVegetarain,
    isVegan,
    isLactoseFree,
  ]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Availabe Filters </Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-Free</Text>
        <Switch
          value={isGlutenFree}
          onValueChange={(newValue) => setisGlutenFree(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Lactose-Free</Text>
        <Switch
          value={isLactoseFree}
          onValueChange={(newValue) => setisLactoseFree(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          value={isVegan}
          onValueChange={(newValue) => setisVegan(newValue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegetarain</Text>
        <Switch
          value={isVegetarain}
          onValueChange={(newValue) => setisVegetarain(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
export default FiltersScreen;
