import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Platform,
	Modal,
	Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
function AppPicker({ icon, placeholder, ...otherprops }) {
	const [modalVisible, setmodalVisible] = useState(false);

	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={25}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>{placeholder}</AppText>
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
	text: {
		flex: 1,
	},
});
export default AppPicker;
