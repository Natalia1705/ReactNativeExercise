import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchResults from "../screens/SearchResults";
import Main from "../screens/Main";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Busca tu próximo destino" }}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={SearchResults}
          options={{ title: "Selecciona tu destino" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
