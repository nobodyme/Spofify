import React from 'react';
import '../styles/components/Loading.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	progress: {
		margin: theme.spacing(2)
	}
}));

function Loading() {
	const classes = useStyles();

	return (
		<div className="spinner">
			<CircularProgress className={classes.progress} color="white" />
		</div>
	);
}

export default Loading;
