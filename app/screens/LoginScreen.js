import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import FormSubmitButton from "../components/FormSubmitButton";
import AppForm from "../components/AppForm";

const validationschema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationschema}
			>
				<AppFormField
					name="email"
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
				/>
				<AppFormField
					name="password"
					placeholder="Password"
					icon="lock"
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry={true}
					keyboardType="email-address"
				/>
				<FormSubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});
export default LoginScreen;
