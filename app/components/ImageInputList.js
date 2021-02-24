//import liraries
import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

// create a component
function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
	return (
		<ScrollView horizontal={true}>
			<View style={styles.container}>
				{imageUris.map((uri) => (
					<View key={uri} style={styles.image}>
						<ImageInput
							imageUri={uri}
							onChangeImage={() => onRemoveImage(uri)}
						/>
					</View>
				))}

				<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
			</View>
		</ScrollView>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});

//make this component available to the app
export default ImageInputList;
