import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { Switch, Route } from "react-router-dom";

const App = () => {
	const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const getMovies = () => {
			axios
				.get("http://localhost:5000/api/movies")
				.then((response) => {
					setMovieList(response.data);
				})
				.catch((error) => {
					console.error("Server Error", error);
				});
		};
		getMovies();
	}, []);

	const addToSavedList = (id) => {
		// This is stretch. Prevent the same movie from being "saved" more than once
		if (!saved.includes(id)) {
			setSaved([...saved, id]);
		}
	};

	return (
		<div>
			<SavedList list={saved} />
			{/* <div>Replace this Div with your Routes</div> */}
			<Switch>
				<Route path="/movies/:id">
					<Movie movies={movieList} addToSavedList={addToSavedList} />
				</Route>

				<Route path="/">
					<MovieList movies={movieList} />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
