import React, { useEffect } from 'react';
import '../styles/components/StatBar.css';
import PropTypes from 'prop-types';

function StatBar({ actualValue, maxValue }) {
	let valueStatBarRef = React.createRef();

	useEffect(() => {
		setTimeout(() => {
			valueStatBarRef.current.style.width = `${(Math.abs(actualValue) * 100) /
				maxValue}%`;
		}, 100);
	});

	return (
		<div className="statBar">
			<div className="statBar__defaultBar" />
			<div className="statBar__valueBar" ref={valueStatBarRef} />
		</div>
	);
}

StatBar.propTypes = {
	actualValue: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired
};

export default StatBar;
