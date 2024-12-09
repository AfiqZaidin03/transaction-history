import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/LoginScreen";
import TransactionHistoryScreen from "@/screens/TransactionHistoryScreen";
import TransactionDetailScreen from "@/screens/TransactionDetailScreen";
import { RootStackParamList } from "@/types/transaction";

const Stack = createStackNavigator<RootStackParamList>();

const _layout = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen} // Correctly typed now
      />
    </Stack.Navigator>
  );
};

export default _layout;
