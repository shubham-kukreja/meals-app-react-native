import { MEALS } from "../../data/dummy";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals";

const initailState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducer = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedMeals = [...state.favouriteMeals];
        updatedMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const applied_filters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (applied_filters.glutenFree & !meal.isGlutenFree) {
          return false;
        }
        if (applied_filters.isLactoseFree & !meal.isLactoseFree) {
          return false;
        }
        if (applied_filters.isVegan & !meal.isVegan) {
          return false;
        }
        if (applied_filters.isVegetarian & !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals : filteredMeals}
    default:
      return state;
  }
};

export default mealsReducer;
