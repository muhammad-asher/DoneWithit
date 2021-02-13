import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from "@expo/vector-icons"

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
						<AppText style={styles.title} numberOfLines={1}>{title}</AppText>
						{subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
					</View>
					<MaterialCommunityIcons color={colors.medium}name="chevron-right" size={25}/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems:"center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailcontainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex:1
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
