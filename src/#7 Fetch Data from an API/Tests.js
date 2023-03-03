import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css"


export function Test() {
    const url = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
    const [data, setData] = useState([]);
    const fetchAPI = async () => {
        const response = await fetch(url);
        const datas = await response.json();
        setData(datas)
    }
    console.log(data);
    return (
        <div className="App">
            <h1>Game Of Thrones Books</h1>
            <h2>Fetch a list from an API and display it here</h2>
        

        {/* // Fetch data from API */}
        <div>
            <button className="fetch-button" onClick={fetchAPI}>Fetch Data</button>
            <br/>
        </div>

        {/* JSX for each Book */}
        
        <div className="books">
            {data.map((item, index) => {
            const {authors, name, numberOfPages, released, country} = item;

            return (
                <div className="book" key={index}>
                <h3>Book N°{index}</h3>
                <h2>{item.name}</h2>

                <div className="details">
                    <p>Authors: {item.authors}</p>
                    <p>Number of Pages: {item.numberOfPages}</p>
                    <p>Country: {item.country}</p>
                    <p>Date released: {item.released}</p>
                </div>
            </div>
            )
        })}
            {/* <div className="book">
                <h3></h3>
                <h2>2</h2>

                <div className="details">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div> */}
        </div>
        </div>
    )
}