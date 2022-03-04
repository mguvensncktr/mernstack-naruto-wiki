import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharactersScreen from "../screens/CharactersScreen";
import DetailScreen from '../screens/DetailScreen';
import ClansScreen from "../screens/ClansScreen";
import ClanDetailScreen from "../screens/ClanDetailScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Characters" component={CharactersScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    );
}

const ClanStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Clan" component={ClansScreen} />
            <Stack.Screen name="ClanDetails" component={ClanDetailScreen} />
        </Stack.Navigator>
    );
}

export { StackNavigator, ClanStackNavigator };