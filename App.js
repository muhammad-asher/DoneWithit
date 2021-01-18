import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Screen from "./app/components/Screen";
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
	const [Category, setCategory] = useState();

	return (
		<Screen>
			<AppPicker
				selectedItem={Category}
				onSelectItem={(item) => setCategory(item)}
				items={catagories}
				placeholder="Category"
				icon="apps"
			/>
			<AppTextInput placeholder="Email" icon="email" />
		</Screen>
	);
}
