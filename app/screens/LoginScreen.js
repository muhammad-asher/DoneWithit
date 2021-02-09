import React from "react";
import { StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationschema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationschema}
			>
				{({ handleChange, handleSubmit, errors }) => (
					<>
						<AppTextInput
							placeholder="Email"
							icon="email"
							autoCapitalize="none"
							onChangeText={handleChange("email")}
							autoCorrect={false}
							keyboardType="email-address"
						/>
						<ErrorMessage error={errors.email} />
						<AppTextInput
							placeholder="Password"
							icon="lock"
							autoCapitalize="none"
							onChangeText={handleChange("password")}
							autoCorrect={false}
							secureTextEntry={true}
							keyboardType="email-address"
						/>
						<ErrorMessage error={errors.password} />
						<AppButton title="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
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
