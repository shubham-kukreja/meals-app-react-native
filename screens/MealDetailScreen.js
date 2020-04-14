import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { ToggleFavourite } from "../store/actions/meals";

const MealDetailScreen = (props) => {
  const { data, id } = props.route.params;
  const dispatch = useDispatch();
  const favouriteMeals = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === id)
  );
  const toggleFavouriteHandler = (mealId) => {
    dispatch(ToggleFavourite(mealId));
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favourite"
            iconName={favouriteMeals ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavouriteHandler.bind(this, id)}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation, favouriteMeals]);
  return (
    <ScrollView>
      <Image source={{ uri: data.imgUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{data.duration} mins</Text>
        <Text>{data.complexity.toUpperCase()}</Text>
        <Text>{data.price.toUpperCase()}</Text>
      </View>
      <View style={styles.screen}>
        <Text style={styles.title}>Ingredients : </Text>
        {data.ingredients.map((step) => (
          <Text style={styles.ing} key={step}>
            {step}
          </Text>
        ))}
        <Text style={styles.title}>Steps : </Text>
        {data.steps.map((step, index) => (
          <Text style={styles.ing} key={step}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    padding: 25,
  },
  ing: {
    padding: 5,
    marginVertical: 2,
    backgroundColor: "#e3e3e3",
  },
});
export default MealDetailScreen;
