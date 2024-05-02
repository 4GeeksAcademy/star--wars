import React, { useState, useEffect, useContext }  from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{(store.planets) && store.planets.map((planet, index) => {
				
				return (
					<p key={index}>{planet.name}</p>
				)
			})}
			<button onClick={()=> {console.log(store)}}>check what is in store (console.log)</button>
		</div>
	)
};
