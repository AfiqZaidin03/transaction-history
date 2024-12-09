import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Transaction } from "@/types/transaction";

type RootStackParamList = {
  TransactionDetail: { transaction: Transaction };
};

type TransactionDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "TransactionDetail"
>;

type TransactionDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TransactionDetail"
>;

type Props = {
  route: TransactionDetailScreenRouteProp;
  navigation: TransactionDetailScreenNavigationProp;
};

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text style={styles.label}>ID:</Text>
      <Text style={styles.value}>{transaction.id}</Text>
      <Text style={styles.label}>Amount:</Text>
      <Text style={styles.value}>{transaction.amount}</Text>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{transaction.date}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{transaction.description}</Text>
      <Text style={styles.label}>Type:</Text>
      <Text style={styles.value}>{transaction.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default TransactionDetailScreen;
