import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/LoginScreen";

const Stack = createStackNavigator();

const _layout = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default _layout;
