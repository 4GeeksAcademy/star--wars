import React, { useState, useEffect, useContext }  from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<button onClick={()=> {console.log(store)}}>check what is in store (console.log)</button>
		</div>
	)
};
