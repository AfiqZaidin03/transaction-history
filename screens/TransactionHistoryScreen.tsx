import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import transactions from "@/constants/transaction.json";

type Transaction = {
  amount: number;
  date: string;
  description: string;
  type: "debit" | "credit";
};

const TransactionHistoryScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.amount}>
        {item.type === "debit" ? "-" : "+"}${item.amount.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={transactions as Transaction[]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  date: {
    flex: 1,
  },
  description: {
    flex: 2,
  },
  amount: {
    flex: 1,
    textAlign: "right",
  },
});
