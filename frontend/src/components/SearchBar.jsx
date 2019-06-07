import React from 'react';
import searchIcon from '../assets/search.png';
import '../styles/components/SearchBar.css';
import PropTypes from 'prop-types';

function SearchBar({ searchInput, onChangeHandler }) {
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

SearchBar.propTypes = {
	searchInput: PropTypes.string,
	onChangeHandler: PropTypes.func
};

export default SearchBar;
