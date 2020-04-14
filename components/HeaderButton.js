import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
// import COLORS from '../'

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      title="Star"
      IconComponent={Ionicons}
      iconSize={22}
    />
  );
};

const styles = StyleSheet.create({});
export default CustomHeaderButton;
