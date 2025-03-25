// src/navigation/HistoryStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../screens/HistoryScreen/HistoryScreen";
import EditEntryScreen from "../screens/EditEntryScreen/EditEntryScreen";

const Stack = createStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="EditEntry" component={EditEntryScreen} />
    </Stack.Navigator>
  );
}
