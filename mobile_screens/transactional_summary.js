import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionalSummary = () => {
  // Placeholder summary data
  const summary = {
    totalTransactions: 4,
    totalAmount: 245,
    highestExpense: "Utilities",
    highestAmount: 100,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactional Summary</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Total Transactions:</Text>
          <Text style={styles.value}>{summary.totalTransactions}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Amount Spent:</Text>
          <Text style={styles.value}>${summary.totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Highest Expense:</Text>
          <Text style={styles.value}>{summary.highestExpense}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Highest Amount:</Text>
          <Text style={styles.value}>${summary.highestAmount.toFixed(2)}</Text>
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
});

export default TransactionalSummary;
