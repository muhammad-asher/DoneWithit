import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function AppTextInput({ icon, width = "100%", ...otherprops }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={25}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={colors.medium}
				style={styles.textinput}
				{...otherprops}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
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
});
export default AppTextInput;
