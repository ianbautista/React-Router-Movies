import React from "react";
import { Link, Route } from "react-router-dom";

const SavedList = (props) => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map((movie) => (
			<>
				<Link to={`/movies/${movie.id}`}>
					<span className="saved-movie">{movie.title}</span>
				</Link>
				<Route path="/movies/:id" />
			</>
		))}
		<Link to="/">
			<div className="home-button">Home</div>
		</Link>
		<Route exact path="/" />
	</div>
);

export default SavedList;
