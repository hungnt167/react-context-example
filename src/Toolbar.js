import React, {Fragment} from 'react';
import {Button} from './Button';

export function Toolbar(props) {
	return <Fragment>
		<Button onClick={props.onClickRefresh} title="Refresh"/>
		<hr/>
		<Button onClick={props.onClickChangeTheme} title="Change Theme"/>
	</Fragment>;
}