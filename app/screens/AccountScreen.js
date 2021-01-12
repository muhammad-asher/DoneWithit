import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItem = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];
function AccountScreen(props) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Muhammad Asher"
					subtitle="masher@gmail.com"
					image={require("../assets/asher.png")}
				></ListItem>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItem}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeperator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Logout"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});
export default AccountScreen;