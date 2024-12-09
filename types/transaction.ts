export type RootStackParamList = {
  Login: undefined;
  TransactionHistory: undefined;
  TransactionDetail: { transaction: Transaction };
};

export type Transaction = {
  id: number;
  amount: number;
  date: string;
  description: string;
  type: "debit" | "credit";
};
