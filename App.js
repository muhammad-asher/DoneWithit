import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
	return <ListingDetailsScreen />;
}
