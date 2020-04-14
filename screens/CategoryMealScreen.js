import React from "react";
import MealList from "../components/MealList";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CategoryMealScreen = (props) => {
  const { title, id } = props.route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <Text style={styles.text}>No Meals Found. Check your Filters?</Text>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    textAlign: "center",
    flex: 1,
    marginTop: 50,
  },
});
export default CategoryMealScreen;
