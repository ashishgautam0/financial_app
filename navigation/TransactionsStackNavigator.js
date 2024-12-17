import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ListOfTransactions from "../mobile_screens/list_of_transactions";
import DetailOfTransactions from "../mobile_screens/Detail_Of_Transactions";

const Stack = createStackNavigator();

const TransactionsStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1DA1F2", // Header color
      },
      headerTintColor: "#fff", // White text/icons
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
    }}
  >
    {/* List of Transactions */}
    <Stack.Screen
      name="ListOfTransactions"
      component={ListOfTransactions}
      options={{
        title: "Transactions",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => alert("Adding a transaction!")}>
            <Ionicons
              name="add-circle"
              size={28}
              color="white"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    />

    {/* Detail of Transactions */}
    <Stack.Screen
      name="DetailOfTransactions"
      component={DetailOfTransactions}
      options={{
        title: "Transaction Detail",
        headerRight: () => (
          <TouchableOpacity onPress={() => alert("Editing transaction!")}>
            <Ionicons
              name="create"
              size={24}
              color="white"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </Stack.Navigator>
);

export default TransactionsStackNavigator;
