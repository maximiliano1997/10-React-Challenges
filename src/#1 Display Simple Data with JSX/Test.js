import React from 'react';
import "./styles.css"

const user = {
    name: "Maximiliano Imanol Aguer",
    location: "Argentina, Chaco",
    foddType: "Todo",
    age: 26,
    likes: "Everything is in the right place",
    twitterUsername: "@aguerima",
    avatar: "https://avatars.githubusercontent.com/u/88645600?v=4"
}

export function Test() {
    return (
        <div className="App">
            <div className="user-deets">
                <img src={user.avatar} alt="" className="img"/>
                <h3 className="user-name">{user.name}</h3>
                <div className="user location">Location: <p>{user.location}</p></div>
                <div className="user likes">Likes: <p>{user.likes}</p></div>
                <div className="user twitter">Twitter: <p>{user.twitterUsername}</p></div>
            </div>
        </div>
    )
}