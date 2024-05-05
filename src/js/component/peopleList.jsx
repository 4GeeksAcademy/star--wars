import React, { useState, useEffect, useContext }  from "react";
import "../../styles/peopleList.css";
import personImage from "../../img/person.png";

import { Context } from "../store/appContext";

export const PeopleList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul className="list-group list-group-horizontal overflow-scroll">
				{store.people.map((person, index) => (
					<li className="list-group-item" key={index}>
						<div className="card">
							<img src={personImage} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">gender: {person.gender}</p>
								<p className="card-text">skin color: {person.skin_color}</p>
								<a href={"./people/" + person.name} className="btn btn-primary">details</a>
								<a onClick={() => actions.addFavorite(person, 'people')} className="btn btn-primary">favorite</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
};
