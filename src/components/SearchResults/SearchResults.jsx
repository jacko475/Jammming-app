import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults() {
	return (
		<div className="searchResultsBox">
			<h1 className="resultsHeader">Results</h1>
			<div className="resultsList">
				<TrackList  />
			</div>
		</div>
	);
}

export default SearchResults;
