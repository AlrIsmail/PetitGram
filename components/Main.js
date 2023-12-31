import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icon from 'react-native-feather';
import ProfileDrawer from "./profileDrawer";
import SearchStack from "./searchStack";
import AddStack from "./addStack";
import FeedStack from "./feedStack";

const Tab = createBottomTabNavigator();

export default class MainScreen extends Component {
    render() {
        return (
           
            <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    showLabel: false,
                    headerShown: false,
                    style: {
                        backgroundColor: "#fff",
                        borderTopWidth: 0,
                        elevation: 0,
                    }
                }}>
                <Tab.Screen
                    name="Feed"
                    component={FeedStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon.Home
                                color={focused ? "#000" : "#ddd"}
                                width={24}
                                height={24}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Search"
                    component={SearchStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Icon.Search
                                color={focused ? "#000" : "#ddd"}
                                width={24}
                                height={24}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={AddStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Icon.PlusCircle
                                color={focused ? "#000" : "#ddd"}
                                width={24}
                                height={24}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileDrawer}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Icon.User
                                color={focused ? "#000" : "#ddd"}
                                width={24}
                                height={24}
                            />
                        )
                    }}
                />
            </Tab.Navigator>

            </NavigationContainer>
        );
    }
}
