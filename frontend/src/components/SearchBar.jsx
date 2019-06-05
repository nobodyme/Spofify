import React from 'react';
import searchIcon from '../assets/search.png';
import '../styles/components/SearchBar.css';
import PropTypes from 'prop-types';

function SearchBar({ searchInput, onChangeHandler, onKeyUpHandler }) {
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
				onKeyUp={onKeyUpHandler}
			/>
		</div>
	);
}

SearchBar.propTypes = {
	searchInput: PropTypes.string,
	onChangeHandler: PropTypes.func,
	onKeyUpHandler: PropTypes.func
};

export default SearchBar;
