import React from "react";
import { Image, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subtitle, image }) {
	return (
		<View style={styles.card}>
			<Image source={image} />
			<AppText>{title}</AppText>
			<AppText>{subtitle}</AppText>
		</View>
	);
}
const styles = StyleSheet.create({
	card: {
		borderradius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
	},
});
export default Card;
