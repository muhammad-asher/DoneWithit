import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "T1shyjfgvjhcxdgdhjhjvhgtfhgjkhkbjhy7567i9798tyfddgvh",
		description: "D1yufgklohgftr7i7r6547tguvxtrutiy9t7fycfjjkjk..,nvy",
		image: require("../assets/asher.png"),
	},
	{
		id: 2,
		title: "T2tasyhdjfgkhlj;k;kmjnhbgdsdfjgkhjljnhbjvcdfgjhkjhigyyfgh",
		description: "D2xhj,kjcxdhfjgkhkgvjhcdfgjkhjhgvfdhfjkhgjvhcdfhgjk",
		image: require("../assets/asher.png"),
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subtitle={item.description}
						image={item.image}
						onPress={() => console.log("Tapped")}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeperator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/asher.png"),
						},
					]);
				}}
			/>
		</Screen>
	);
}
const styles = StyleSheet.create({});

export default MessagesScreen;
