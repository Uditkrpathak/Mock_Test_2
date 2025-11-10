import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


import HomeScreen from "../screens/HomeScreen";
import PlaylistScreen from "../screens/PlayListScreen";
import LibraryScreen from "../screens/LibraryScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      elevation: 10,
      backgroundColor: "#fff",
      borderRadius: 30,
      height: 70,
      borderTopWidth: 0,
      paddingBottom: 10,
      paddingTop: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
    },
    tabBarIcon: ({ focused }) => {
      let iconName;

      switch (route.name) {
        case "Home":
          iconName = focused ? "home" : "home-outline";
          break;
        case "Playlist":
          iconName = focused ? "musical-notes" : "musical-notes-outline";
          break;
        case "Library":
          iconName = focused ? "library" : "library-outline";
          break;
        case "Profile":
          iconName = focused ? "person" : "person-outline";
          break;
        default:
          iconName = "ellipse";
      }

      return (
        <Ionicons
          name={iconName}
          size={26}
          color={focused ? "#131212" : "#403838"}
        />
      );
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Playlist" component={PlaylistScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
