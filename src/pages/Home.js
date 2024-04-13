import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";
import Picture from "../components/Picture";

const Home = () => {
	let [searchInput, setSearchInput] = useState("");
	let [data, setData] = useState(null);
	let [page, setPage] = useState(1);
	let [currentSearch, setCurrentSearch] = useState("");
	const pexelApiKey = process.env.REACT_APP_PEXELS_API_KEY;
	const initialURL =
		"https://api.pexels.com/v1/curated?page=1&per_page=15";
	let searchURL = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=15&page=1`;

	// search function
	// get photo from PEXELS API
	const search = async (url) => {
		let result = await axios.get(url, {
			headers: { Authorization: pexelApiKey },
		});
		// console.log(result);
		setData(result.data.photos);
		setCurrentSearch(searchInput);
	};

	// Closure, wont set page instantly
	const morePicture = async () => {
		let newURL;
		console.log("Page State Before: ", page);
		setPage(page + 1);
		console.log("Page State After: ", page);
		if (currentSearch === "") {
			newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
		} else {
			newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page + 1}`;
		}
		let result = await axios.get(newURL, {
			headers: { Authorization: pexelApiKey },
		});
		setData(data.concat(result.data.photos));
	};

	useEffect(() => {
		search(initialURL);
	}, []);

	return (
		<div style={{ minHeight: "100vh" }}>
			<Search
				search={() => {
					search(searchURL);
				}}
				setSearchInput={setSearchInput}
			/>
			<div className="pictures">
				{data &&
					data.map((d) => <Picture key={d.id} data={d} />)}
			</div>
			<div className="morePicture">
				<button onClick={morePicture}>Load More</button>
			</div>
		</div>
	);
};

export default Home;
