import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import firebase from "firebase";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import { firebaseConfig } from "./app/config/key";
export default function App() {
	const [user, setUser] = useState(null);

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	firebase.auth().onAuthStateChanged((usr) => {
		setUser(usr);
	});

	console.log(user);

	return (
		<NavigationContainer theme={navigationTheme}>
			<LoginScreen />
		</NavigationContainer>
	);
}
