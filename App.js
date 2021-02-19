import React, { useState,useEffect } from "react";
import { Image } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native";

export default function App() {

	const [imageUri, setImageUri] = useState();

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchCameraAsync();
			if (!result.cancelled) setImageUri(result.uri);
		} catch (error) {
			console.log("Error Reading an Image", error);
		}
	};
	return (
		<Screen>
			<Button title="Select Image" onPress={selectImage} />
			<Image source={{uri:imageUri}} style={{ width: 200, height: 200 }} />
		</Screen>
	);
}
