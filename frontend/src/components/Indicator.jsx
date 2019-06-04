import React from 'react';
import '../styles/components/Indicator.css';

function Indicator({ text }) {
	return (
		<div className="indicator">
			<div className="indicator__img" />
			<div className="indicator__text">{text}</div>
		</div>
	);
}

export default Indicator;
