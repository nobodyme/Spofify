import React from 'react';
import searchIcon from '../assets/search.png';
import '../styles/components/SearchBar.css';

function searchBar({ searchInput, onChangeHandler }) {
	return (
		<div className="searchBox">
			<img className="searchIcon" alt="search icon" src={searchIcon} />
			<input
				autoFocus
				className="searchInput"
				type="input"
				placeholder="Search"
				value={searchInput}
				onChange={onChangeHandler}
			/>
		</div>
	);
}

export default searchBar;
