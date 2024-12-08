import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/LoginScreen";
import TransactionHistoryScreen from "@/screens/TransactionHistoryScreen";

const Stack = createStackNavigator();

const _layout = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default _layout;
