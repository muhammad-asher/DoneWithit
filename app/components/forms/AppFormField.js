import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
function AppFormField({ name, width,...otherProps }) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
	return (
		<>
			<AppTextInput
				placeholder="Email"
				autoCapitalize="none"
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
				width={width}
				{...otherProps}
				autoCorrect={false}
				keyboardType="email-address"
			/>
			{<ErrorMessage error={errors[name]} visible={touched[name]} />}
		</>
	);
}

export default AppFormField;
