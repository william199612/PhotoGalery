import React from "react";

const Search = ({ search, setSearchInput }) => {
	const searchInputHandler = (e) => {
		setSearchInput(e.target.value);
	};
	return (
		<div className="search">
			<input
				className="input"
				onChange={searchInputHandler}
				type="text"
			/>
			<button onClick={search}>Search</button>
		</div>
	);
};

export default Search;
