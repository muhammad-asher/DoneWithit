import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailContainer}>
				<AppText style={styles.title}>Red Jacket for Sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.usercontainer}>
					<ListItem
						image={require("../assets/asher.png")}
						title="Muhammad Asher"
						subtitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	detailContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	usercontainer: {
		marginVertical:40
	},
});

export default ListingDetailsScreen;
