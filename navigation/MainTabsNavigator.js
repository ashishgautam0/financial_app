import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsStackNavigator from "./TransactionsStackNavigator";
import TransactionalSummary from "../mobile_screens/transactional_summary";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainTabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = "help-circle-outline";

        if (route.name === "Transactions") {
          iconName = focused ? "wallet" : "wallet-outline";
        } else if (route.name === "Summary") {
          iconName = focused ? "bar-chart" : "bar-chart-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#1DA1F2",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: "#ffffff",
        elevation: 2,
        borderTopWidth: 0,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600",
      },
    })}
  >
    <Tab.Screen
      name="Transactions"
      component={TransactionsStackNavigator}
      options={{
        headerShown: false,
        tabBarLabel: "Transactions",
      }}
    />
    <Tab.Screen
      name="Summary"
      component={TransactionalSummary}
      options={{
        title: "Summary",
        tabBarLabel: "Summary",
      }}
    />
  </Tab.Navigator>
);

export default MainTabsNavigator;
