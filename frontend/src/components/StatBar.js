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
			<div className="defaultStatBar" />
			<div className="valueStatBar" ref={valueStatBarRef} />
		</div>
	);
}

export default StatBar;
