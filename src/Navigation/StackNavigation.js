import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharactersScreen from "../screens/CharactersScreen";
import DetailScreen from '../screens/DetailScreen';
import ClansScreen from "../screens/ClansScreen";
import ClanDetailScreen from "../screens/ClanDetailScreen";
import DojutsuScreen from "../screens/DojutsuScreen";
import DojutsuDetailScreen from "../screens/DojutsuDetailScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Character" component={CharactersScreen} />
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

const DojutsuStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dojutsu" component={DojutsuScreen} />
            <Stack.Screen name="DojutsuDetails" component={DojutsuDetailScreen} />
        </Stack.Navigator>
    );
}

export { StackNavigator, ClanStackNavigator, DojutsuStackNavigator };