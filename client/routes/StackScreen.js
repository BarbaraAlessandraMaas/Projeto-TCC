import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TelaLogin } from "../screens/TelaLogin";
import { TelaRegistro } from "../screens/TelaRegistro";
import { TelaEndereco } from "../screens/TelaEndereco";
import { TelaCidade } from "../screens/TelaCidade";

const Stack = createStackNavigator();

export function StackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
                <Stack.Screen name="TelaRegistro" component={TelaRegistro} options={{ headerShown: false }} />
                <Stack.Screen name="TelaEndereco" component={TelaEndereco} options={{ headerShown: false }} />
                <Stack.Screen name="TelaCidade" component={TelaCidade} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}