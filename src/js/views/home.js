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
		<div className='container-fluid'>
			{store.planets && (
			<div>
				<div className='row justify-content-center'>
					<div className='col-10'>
						<div className='row d-flex justify-content-between py-3'>
							<div className='col-3'>
								<h2>Star Wars</h2>
							</div>
							<div className='col-3 d-flex justify-content-end'>
								<FavoriteList/>
							</div>
						</div>
						<div className='row'>
							<div className='col-12 scrollmenu'>
								<PlanetList />
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-12 scrollmenu'>
								<PeopleList />
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-12 scrollmenu'>
								<VehicleList />
							</div>
						</div>
					</div>
				</div>
			</div>
			)}
			{!store.planets && <p>Loading. please wait</p>}
		</div>
	)
};
