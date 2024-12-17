import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

const ListOfTransactions = () => {
  const navigation = useNavigation();
  const [transactions] = useState([
    { id: "1", title: "Groceries", amount: 50, date: "2024-10-01", icon: "cart" },
    { id: "2", title: "Transport", amount: 20, date: "2024-10-02", icon: "bus" },
    { id: "3", title: "Utilities", amount: 100, date: "2024-10-03", icon: "flash" },
    { id: "4", title: "Dining Out", amount: 75, date: "2024-10-04", icon: "restaurant" },
  ]);

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("DetailOfTransactions", { transaction: item })
      }
    >
      <View style={styles.transactionDetails}>
        <Ionicons name={item.icon} size={28} color="#1DA1F2" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransactionItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#1DA1F2",
    color: "#fff",
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1DA1F2",
  },
});

export default ListOfTransactions;
