import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text,StyleSheet, Alert, SafeAreaView } from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello React </Text>
			<Button
				title="Click me"
				onPress={() =>
					Alert.alert("Title Rn", "My message", [
						{
							text: "Yes",
						},
						{
							text: "No",
						},
					])
				}
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
