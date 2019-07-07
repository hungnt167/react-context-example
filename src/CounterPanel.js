import React, {Fragment} from 'react';
import CounterContext from './CounterContext';
import {Button} from './Button';

export class CounterPanel extends React.Component {
	render() {
		return <CounterContext.Consumer>
			{(context) => 
			<Fragment>
				<Button onClick={context.dec.bind(context)} title="-"/>
				<Button onClick={context.inc.bind(context)} title="+"/>
			</Fragment>}
		</CounterContext.Consumer>;
	}
}