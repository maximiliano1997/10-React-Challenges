import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css"



function StatCard({label, icon, number}) {
    // const label = props.label;
    // const icon = props.icon;
    // const number = props.number;

    return (
        <div className="stat-card">
            <div className="card-info">
                <span>{icon}</span><p>{label}</p>
            </div>
            <h3>{number.toLocaleString()}</h3>
        </div>
    )
  // define component here
  // definei props of icon label and number
}

export function Test() {

    return (
        <div className="App">
            <h2>Use components and props in React</h2>
            {/* Use child cpomponent x4 here */}
            <StatCard label="Wins 📈" icon="🏆" number={2520} />
            <StatCard label="Loses 📉" icon="🏆" number={1208} />
            <StatCard label="Draws ⚒" icon="🏆" number={760} />
            <StatCard label="Experience" icon="📊💯" number={70.152} />
            <StatCard label="Level ⚒" icon="🔰" number={76} />
            <StatCard label="Money ⚒" icon="💰" number={9576} />


        </div>
    )
}