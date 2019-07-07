import React from 'react';
import CounterContext from './CounterContext';

export default class CounterProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			inc: () => {
				this.setState(prevState => {
					return {
						count: prevState.count +=1
					}
				});
			},
			dec: () => {
				this.setState(prevState => {
					return {
						count: prevState.count -=1
					}
				});
			},
		}
	}
	render() {
		return (
			<CounterContext.Provider value={this.state}>
				{this.props.children}
			</CounterContext.Provider>
		);
	}
}