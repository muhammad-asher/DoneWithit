import React, { useState, useEffect } from "react";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
	const [imageUris, setImageUris] = useState([]);

	const handleadd = (uri) => {
		setImageUris([...imageUris, uri]);
	};
	const handleRemove = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};
	return (
		<Screen>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleadd}
				onRemoveImage={handleRemove}
			/>
		</Screen>
	);
}
