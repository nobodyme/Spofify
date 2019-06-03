import React from 'react';
import '../styles/components/StatBar.css';

function StatBar({ song, songAttr, maxValue }) {
	let valueStatBarRef = React.createRef();

	setTimeout(() => {
		valueStatBarRef.current.style.width = `${(Math.abs(song[songAttr]) * 100) /
			maxValue}%`;
	}, 100);

	return (
		<div className="statBar">
			<div className="statBar__default" />
			<div className="statBar__value" ref={valueStatBarRef} />
		</div>
	);
}

export default StatBar;
