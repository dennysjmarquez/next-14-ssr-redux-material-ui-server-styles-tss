import React from 'react';
import { demoStyles } from './styles/demo.styles';
import { Alert, Container } from '@mui/material';

const DemoComponent = () => {
	const { classes, cx } = demoStyles();

	return (
		<>
			<Container maxWidth="sm">
				<div className={classes.div1}>Hola 1</div>
				<div className={cx(classes.div2)}>Hola 2</div>
				<div className={cx(classes.div4)}>Hola 3</div>

				<Alert severity="success">This is a success Alert.</Alert>
			</Container>
		</>
	);
};

export const Demo = React.memo(DemoComponent);
