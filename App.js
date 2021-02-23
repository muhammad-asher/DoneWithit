import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
	const [imageUri, setImageUri] = useState();

	return (
		<Screen>
			<ImageInput
				imageUri={imageUri}
				onChangeImage={(uri) => setImageUri(uri)}
			/>
		</Screen>
	);
}
