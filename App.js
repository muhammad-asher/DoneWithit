import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const catagories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];
export default function App() {
	return (
		<Screen>
			<AppPicker items={catagories} placeholder="Category" icon="apps" />
			<AppTextInput placeholder="Email" icon="email" />
		</Screen>
	);
}
