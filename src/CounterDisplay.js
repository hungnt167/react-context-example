import React from 'react';
import ThemeContext from './ThemeContext';
import CounterContext from './CounterContext';

export function CounterDisplay(props) {
	return <CounterContext.Consumer>
		{(context) => {
			return (
				<ThemeContext.Consumer>
					{(themeContext) => <input type="number" value={context.count} readOnly={true} style={{
						backgroundColor: themeContext.backgroundColor, 
						color: themeContext.color, 
					}}/>}
				</ThemeContext.Consumer>
			)
		}}
	</CounterContext.Consumer>
	;
}