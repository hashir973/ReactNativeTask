import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BooksListingScreen from "./src/screens/BooksListingScreen";
import BookDetail from "./src/screens/BookDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="BooksListingScreen"
          component={BooksListingScreen}
        />
        <Stack.Screen name="Detail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
