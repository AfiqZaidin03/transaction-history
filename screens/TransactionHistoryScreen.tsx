import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import transactions from "@/constants/transaction.json";

type Transaction = {
  amount: number;
  date: string;
  description: string;
  type: "debit" | "credit";
};

const TransactionHistoryScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>
        {item.type === "debit" ? "-" : "+"}${item.amount.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.userName}>Muhammad Afiq</Text>
        </View>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceTitle}>Your Balance This Month</Text>
        <Text style={styles.balanceAmount}>RM10,000.00</Text>
      </View>

      {/* Savings Plan Section */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.savingsPlan}
        >
          <View style={styles.savingCard}>
            <Text style={styles.savingTitle}>Upgrade PC</Text>
            <Text style={styles.savingAmount}>RM4000</Text>
          </View>
          <View style={styles.savingCard}>
            <Text style={styles.savingTitle}>Investment</Text>
            <Text style={styles.savingAmount}>RM5000</Text>
          </View>
          <View style={styles.savingCard}>
            <Text style={styles.savingTitle}>New Car</Text>
            <Text style={styles.savingAmount}>RM15000</Text>
          </View>
        </ScrollView>
      </View>

      {/* Transaction History Section */}
      <View style={styles.transactionSection}>
        <Text style={styles.sectionTitle}>Transaction History</Text>
        <FlatList
          data={transactions as Transaction[]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.transactionList}
        />
      </View>
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  greeting: { fontSize: 14, color: "#777" },
  textContainer: { marginLeft: 10 },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  balanceSection: {
    padding: 20,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
  },
  balanceTitle: { fontSize: 14, color: "#777" },
  balanceAmount: { fontSize: 32, fontWeight: "bold", color: "#000" },
  savingsPlan: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 20,
    backgroundColor: "grey",
  },
  savingCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    width: 150,
    height: 100,
  },
  savingTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  savingAmount: { fontSize: 14, color: "black" },
  transactionSection: { flex: 1, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  transactionDetails: { flex: 1 },
  transactionTitle: { fontSize: 16, fontWeight: "bold" },
  transactionDate: { fontSize: 14, color: "#777" },
  transactionAmount: { fontSize: 16, fontWeight: "bold", color: "#000" },
  transactionList: {
    flex: 1,
  },
});
