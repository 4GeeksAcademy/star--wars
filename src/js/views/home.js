import React, { useState, useEffect, useContext }  from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import { PlanetList } from "../component/planetList.jsx";
import { PeopleList } from "../component/peopleList.jsx";
import { VehicleList } from "../component/vehicleList.jsx";
import { FavoriteList } from "../component/favoriteList.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className='header'>
				<FavoriteList/>
			</div>
			{store.planets && <PlanetList/>}
			{!store.planets && <p>Loading</p>}
			{store.people && <PeopleList/>}
			{store.vehicles && <VehicleList/>}
		</div>
	)
};
