import React, { useState } from "react";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const catagories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];
export default function App() {
	const [Category, setCategory] = useState();

	return (
		<Screen>
			<AppPicker
				selectedItem={Category}
				onSelectItem={(item) => setCategory(item)}
				items={catagories}
				placeholder="Category"
				icon="apps"
			/>
			<AppTextInput placeholder="Email" icon="email" />
		</Screen>
	);
}
