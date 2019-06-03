import React from 'react';
import searchIcon from '../assets/search.png';
import '../styles/components/SearchBar.css';

function searchBar({ searchInput, onChangeHandler }) {
	return (
		<div className="searchBox">
			<img className="searchBox__icon" alt="search icon" src={searchIcon} />
			<input
				autoFocus
				className="searchBox__input"
				type="input"
				placeholder="Search"
				value={searchInput}
				onChange={onChangeHandler}
			/>
		</div>
	);
}

export default searchBar;