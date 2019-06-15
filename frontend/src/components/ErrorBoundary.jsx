import React, { Component } from 'react';
import Indicator from './Indicator';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return <Indicator text="Oops, something went wrong" />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
