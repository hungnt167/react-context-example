import React from 'react';

export const themes = {
	dark: {
		backgroundColor: '#000',
		color: '#fff',
	},
	light: {
		backgroundColor: '#fff',
		color: '#000',
	}
}
const ThemeContext = React.createContext(themes.light);  

export default ThemeContext;