import React from 'react';
import CounterProvider from './CounterProvider';
import {CounterDisplay} from './CounterDisplay';
import {CounterPanel} from './CounterPanel';
import {H3} from './H3';

export class Counter extends React.Component {
	render() {
		return (
			<CounterProvider>
				<div style={{
					
				}}>
					<H3 title="CounterProvider"></H3>
					<CounterDisplay/>
					<CounterPanel />
				</div>
			</CounterProvider>
		);
	}
}