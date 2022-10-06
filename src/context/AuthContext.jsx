import React from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
	//state
	const [isAuthenticate, setAuthenticate] = useState(false);

	const toggleAuth = () => {
		setAuthenticate(!isAuthenticate);
	};
	//use effect
	useEffect(() => {
		alert(isAuthenticate ? "You are login" : "You are logout");
	}, [isAuthenticate]);
	const authenContext = {
		isAuthenticate,
		toggleAuth,
	};
	return (
		<AuthContext.Provider value={authenContext}>
			{children}
		</AuthContext.Provider>
	);
}
