import React, { useState, useEffect, useContext }  from "react";
import "../../styles/planetList.css";
import planetImage from "../../img/planet.jpg";

import { Context } from "../store/appContext";

export const PlanetList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul className="list-group list-group-horizontal overflow-scroll">
				{store.planets.map((planet, index) => (
					<li className="list-group-item" key={index}>
						<div className="card">
							<img src={planetImage} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-text">climate: {planet.climate}</p>
								<p className="card-text">population: {planet.population}</p>
								<p className="card-text">orbital period: {planet.orbital_period}</p>
								<a href={"./planets/" + planet.name} className="btn btn-primary">details</a>
								<a onClick={() => actions.addFavorite(planet, 'planets')} className="btn btn-primary">favorite</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
};
