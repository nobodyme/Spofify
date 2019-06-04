import React from 'react';
import '../styles/components/StatBar.css';

function StatBar({ actualValue, maxValue }) {
	let valueStatBarRef = React.createRef();

	setTimeout(() => {
		valueStatBarRef.current.style.width = `${(Math.abs(actualValue) * 100) /
			maxValue}%`;
	}, 100);

	return (
		<div className="statBar">
			<div className="statBar__defaultBar" />
			<div className="statBar__valueBar" ref={valueStatBarRef} />
		</div>
	);
}

export default StatBar;
