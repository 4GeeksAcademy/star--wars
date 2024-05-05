import React, { useState, useEffect, useContext }  from "react";
import "../../styles/vehicleList.css";
import vehicleImage from "../../img/vehicle.png";

import { Context } from "../store/appContext";

export const VehicleList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul className="list-group list-group-horizontal overflow-scroll">
				{store.vehicles.map((vehicle, index) => (
					<li className="list-group-item" key={index}>
						<div className="card">
							<img src={vehicleImage} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<p className="card-text">model: {vehicle.model}</p>
								<p className="card-text">manufacturer: {vehicle.manufacturer}</p>
								<a href={"./vehicles/" + vehicle.name} className="btn btn-primary">details</a>
								<a onClick={() => actions.addFavorite(vehicle, 'vehicles')} className="btn btn-primary">favorite</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
};
