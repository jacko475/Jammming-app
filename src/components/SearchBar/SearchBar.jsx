import { useState } from "react";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<div className="searchBarContainer">
			<div className="searchBar">
				<label className="searchBarLabel">Search for a song!</label>
				<input
					onChange={handleInput}
					id="search"
					placeholder="Enter A Song, Album, or Artist"
					value={searchTerm}
				/>
				<button className="searchButton">SEARCH</button>
			</div>
		</div>
	);
};

export default SearchBar;
