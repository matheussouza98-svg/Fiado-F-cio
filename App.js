import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./screens/MenuScreen";
import ClientesScreen from "./screens/ClientesScreen";
import NovaDividaScreen from "./screens/NovaDividaScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Clientes" component={ClientesScreen} />
        <Stack.Screen name="NovaDivida" component={NovaDividaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}