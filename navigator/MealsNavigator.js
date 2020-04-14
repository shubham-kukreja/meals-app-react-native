import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const FavStack = createStackNavigator();
const FilterStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import HeaderButton from "../components/HeaderButton";


import CategoryMealScreen from "../screens/CategoryMealScreen";
import CategoryScreen from "../screens/CategoryScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

export const stackNavigatorScreen = () => (
  <Stack.Navigator initialRouteName="Meals">
    <Stack.Screen
      name="Meals"
      component={CategoryScreen}
      options={{ title: "Meals" }}
    />
    <Stack.Screen name="CategoryMealScreen" component={CategoryMealScreen} />
    <Stack.Screen
      name="MealDetailScreen"
      options={({ route }) => ({ title: route.params.title })}
      component={MealDetailScreen}
    />
  </Stack.Navigator>
);
export const FavouriteStack = () => (
  <FavStack.Navigator initialRouteName="FavouriteScreen">
    <FavStack.Screen name="Your Favourites" component={FavouriteScreen} />
    <FavStack.Screen
      name="MealDetailScreen"
      component={MealDetailScreen}
      options={{
        headerTitle: (props) => {
          console.log(props);
        },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Favourite"
              iconName="ios-star"
              onPress={console.log("Star")}
            />
          </HeaderButtons>
        ),
      }}
    />
  </FavStack.Navigator>
);
export const filterNavigator = () => (
  <FilterStack.Navigator initialRouteName="Filter">
    <FilterStack.Screen name="Filter" component={FiltersScreen} />
  </FilterStack.Navigator>
);
export const tabNavigaor = () => (
  <Tab.Navigator tabBarOptions={{ activeTintColor: "black" }}>
    <Tab.Screen
      name="Meals"
      component={stackNavigatorScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: () => <Ionicons name="ios-restaurant" size={22} />,
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={FavouriteStack}
      options={{
        tabBarLabel: "Favourites",
        tabBarIcon: () => <Ionicons name="md-heart" size={22} />,
      }}
    />
  </Tab.Navigator>
);

export const DrawerMain = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={tabNavigaor} />
      <Drawer.Screen name="Filter" component={filterNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);
