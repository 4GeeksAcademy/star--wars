import React, { useState, useEffect, useContext }  from "react";
import "../../styles/peopleList.css";

import { Context } from "../store/appContext";

export const FavoriteList = () => {
	const { store, actions } = useContext(Context);
	
	return (
        <div className='favorites'>
            <ul>
                {store.favorites && store.favorites.map((item, id) => {
                    return (
                        <li key={id}>
                            <a href={'./' + item.type + '/' + item.name}>{item.name}</a>
                            <button onClick={() => actions.deleteFavorite(item)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
	)
};


