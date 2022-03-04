import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

//screens
import { StackNavigator, ClanStackNavigator, DojutsuStackNavigator } from './StackNavigation';
import HomeScreen from '../screens/HomeScreen';

// constants
import { COLORS, FONTS } from '../constants';

const Tabs = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.black,
                    height: Platform.OS === 'ios' ? 50 : 60,
                    borderTopWidth: 0,
                    borderTopColor: 'transparent',
                },
            }}
        >
            <Tabs.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Foundation name="home" size={24} color={focused ? COLORS.white : COLORS.gray} />
                    ),
                }}
            />
            <Tabs.Screen name="Characters" component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="users" size={24} color={focused ? COLORS.white : COLORS.gray} />
                    ),
                }}
            />
            <Tabs.Screen name="Clans" component={ClanStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="google-circles-communities" size={24} color={focused ? COLORS.white : COLORS.gray} />
                    )
                }}
            />
            <Tabs.Screen name="Dojutsu's" component={DojutsuStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="bullseye" size={24} color={focused ? COLORS.white : COLORS.gray} />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}

export default TabNavigator;

