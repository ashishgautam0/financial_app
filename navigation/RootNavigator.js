import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabsNavigator from "./MainTabsNavigator";

const RootNavigator = () => (
  <NavigationContainer>
    <MainTabsNavigator />
  </NavigationContainer>
);

export default RootNavigator;
