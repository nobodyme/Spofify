import React from 'react';
import '../styles/components/Indicator.css';
import PropTypes from 'prop-types';

function Indicator({ text }) {
	return (
		<div className="indicator">
			<div className="indicator__img" />
			<div className="indicator__text">{text}</div>
		</div>
	);
}

Indicator.propTypes = {
	text: PropTypes.string.isRequired
};

export default Indicator;
