import React from 'react';
import ThemeContext from './ThemeContext';

export class H3 extends React.Component {
	render() {
		const {title} = this.props;
		return <ThemeContext.Consumer>{(context) => (
			<h3 style={{ 
				color: context.color, 
			}}>{title}</h3>
		)}</ThemeContext.Consumer>
		
	}
}
