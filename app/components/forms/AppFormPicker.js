import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
function AppFormPicker({
	items,
	name,
	numberOfColumns,
	PickerItemComponent,
	placeholder,
	width,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	return (
		<>
			<AppPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				numberOfColumns={numberOfColumns}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormPicker;
