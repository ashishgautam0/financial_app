import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailOfTransactions = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Details</Text>
      <View style={styles.card}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.value}>
            {transaction.emoji ? `${transaction.emoji} ` : ""}
            {transaction.title}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>${transaction.amount.toFixed(2)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1DA1F2",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flexShrink: 1,
  },
});

export default DetailOfTransactions;
