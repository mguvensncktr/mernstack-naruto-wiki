import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AboutScreen from "../screens/AboutScreen";
import PersonalScreen from "../screens/PersonalScreen";
import { COLORS, FONTS, SIZES } from "../constants";
import { Text } from "react-native";
import JutsuScreen from "../screens/JutsuScreen";

const TopTabs = createMaterialTopTabNavigator();

const TopTabBar = ({ character }) => {


    return (
        <TopTabs.Navigator
            initialRouteName="About"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    marginTop: SIZES.padding,
                    borderTopWith: 0,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                },
                tabBarLabelStyle: {
                    fontSize: SIZES.font,
                    color: COLORS.black,
                    ...FONTS.body3,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#748ab3',
                    height: 2,
                },
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: '#bfbfbf',
            }}
            backBehavior="none"
        >
            <TopTabs.Screen name="About" component={AboutScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{
                            fontSize: SIZES.font,
                            color: color,
                            fontWeight: 'bold',
                            ...FONTS.body3,
                        }}>About</Text>
                    ),
                }}
                initialParams={{ character }}
            />
            <TopTabs.Screen name="Personal" component={PersonalScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: SIZES.font,
                            fontWeight: 'bold',
                            color: focused ? COLORS.black : '#bfbfbf',
                            ...FONTS.body3,
                        }}>Personal</Text>
                    ),
                }}
                initialParams={{ character }}
            />
            <TopTabs.Screen name="Jutsu" component={JutsuScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: SIZES.font,
                            fontWeight: 'bold',
                            color: focused ? COLORS.black : '#bfbfbf',
                            ...FONTS.body3,
                        }}>Jutsu</Text>
                    ),
                }}
                initialParams={{ character }}
            />
        </TopTabs.Navigator>
    )
}

export default TopTabBar;