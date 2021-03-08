import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "Red Jacket for Sale",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in Great Condition",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
];

function ListingScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={"$" + item.price}
						image={item.image}
						onPress={() => navigation.navigate("ListingDetails", item)}
					/>
				)}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	screen: {
		padding: 10,
		backgroundColor: colors.light,
	},
});

export default ListingScreen;
