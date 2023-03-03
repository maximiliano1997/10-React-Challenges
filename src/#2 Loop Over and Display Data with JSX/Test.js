import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"
import ScotchInfoBar from "./ScotchInfoBar"

/** our data comes from users-data */
import users from "./users-data";

/** Our REact component where we display data */

export function Test() {
    return (
        <div className="App">
            <div className="page-title">
                <h2>Loop Over an Array of Data</h2>
                <h2>Top 10 Billionaires</h2>
            </div>
            
        

        <div className="users">
            <ul>
                {users.map((user, index) => {
                const { name, location, netWorth } = user;

                return (
                    <li key={index} className="card">
                        <div className="data">
                        <p>{user.name}</p>
                        <p>{user.location}</p>
                        <p>{user.netWorth}</p>
                        </div>
                        
                        <div className="data">
                            <div className="img">
                            <img src={user.image} alt={user.name}/>
                        </div>
                        </div>
                    </li>
                )
            })}
            </ul>
            
        </div>
        </div>
    )
}