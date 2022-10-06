import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
export default function Header() {
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;
	const style = isLightTheme ? light : dark;

	const { isAuthenticate } = useContext(AuthContext);
	const { toggleAuth } = useContext(AuthContext);
	return (
		<div style={style}>
			<h1 style={{ textAlign: "center" }}>TO DO LIST</h1>
			<ul style={{ display: "flex", justifyContent: "space-around" }}>
				<li>Home</li>
				<li>
					<button onClick={toggleAuth}>
						{isAuthenticate ? "Logout" : "Loggin"}
					</button>
				</li>
			</ul>
			{isAuthenticate ? "You are loggin" : ""}
		</div>
	);
}
