import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharactersScreen from "../screens/CharactersScreen";
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Characters" component={CharactersScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;