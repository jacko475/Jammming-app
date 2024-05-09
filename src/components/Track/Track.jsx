const mockData = [
	{
		name: "Track 1",
		artist: "Artist 1",
		album: "Album 1",
	},
	{
		name: "Track 2",
		artist: "Artist 2",
		album: "Album 2",
	},
	{
		name: "Track 3",
		artist: "Artist 3",
		album: "Album 3",
	},
	{
		name: "Track 4",
		artist: "Artist 4",
		album: "Album 4",
	},
	{
		name: "Track 5",
		artist: "Artist 5",
		album: "Album 5",
	},
	{
		name: "Track 6",
		artist: "Artist 6",
		album: "Album 6",
	},
];

const Track = () => {
	return (
		<div className="track">
			<div className="trackInformation">
				<h3>Test</h3>
				<p>
                Test | Test
				</p>
			</div>
			<button className="trackAction">+</button>
		</div>
	);
};

export default Track;
