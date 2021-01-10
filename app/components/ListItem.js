import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
	title,
	subtitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailcontainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailcontainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: "700",
	},
	subtitle: {
		color: colors.medium,
	},
});

export default ListItem;
