import React from 'react';
import ThemeContext from './ThemeContext';

export class Button extends React.Component {
	static contextType = ThemeContext;
	render() {
		const {title, onClick} = this.props;
		return <button style={{ 
			backgroundColor: this.context.backgroundColor, 
			color: this.context.color, 
		}} onClick={onClick}>{title}</button>
	}
}
