import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Platform,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
function AppPicker({
	icon,
	items,
	placeholder,
	numberOfColumns = 1,
	PickerItemComponent = PickerItem,
	selectedItem,
	onSelectItem,
	width = "100%",
}) {
	const [modalVisible, setmodalVisible] = useState(false);

	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={25}
							color={colors.medium}
							style={styles.icon}
						/>
					)}

					<AppText style={styles.placeholder}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name="chevron-down"
						size={25}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button title="Close" onPress={() => setmodalVisible(false)}></Button>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setmodalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</React.Fragment>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	textinput: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		flex: 1,
		color: colors.medium,
	},
	text: {
		flex: 1,
	},
});
export default AppPicker;
