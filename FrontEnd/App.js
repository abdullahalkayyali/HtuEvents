import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import ProfileScreen from "./components/ProfileScreen";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import AddEventScreen from "./components/AddEventScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { EventProvider } from "./components/Events";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: "Event Details" }}
            />
            <Stack.Screen name="Add" component={AddEventScreen} />
        </Stack.Navigator>
    );
};

const MainTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Add Event"
                component={AddEventScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="person"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="MainApp"
                component={MainTabNavigator}
                options={{
                    headerShown: true,
                    headerStyle: {
                        shadowColor: "transparent",
                        height: 50,
                    },
                    headerTitleStyle: {
                        color: "#FFF",
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <EventProvider>
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </ApplicationProvider>
        </EventProvider>
    );
}
