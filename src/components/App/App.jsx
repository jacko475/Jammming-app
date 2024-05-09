import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
	return (
		<div className="container">
			<Header />
			<SearchBar />
			<div className="mainAreaBox">
				<SearchResults />
				<Playlist />
			</div>
		</div>
	);
}

export default App;
