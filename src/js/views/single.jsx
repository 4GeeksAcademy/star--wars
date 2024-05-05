import React, { useState, useEffect, useContext }  from "react";
import "../../styles/single.css";


export const Single = ( { item } ) => {

    let entries = []

    for (let [key, value] of Object.entries(item)) {
        entries.push([key, value]);
        console.log(key + ' ' + value);
    }

    return (
        <div>
            {entries.map((entry, index) => {
                console.log(entry);

                return (
                    <div>
                        <h3 key={index}>{entry[0].replace("_", ' ')}: {entry[1]}</h3>
                        <br></br>
                    </div>
                )
            })}

        </div>
    )
}