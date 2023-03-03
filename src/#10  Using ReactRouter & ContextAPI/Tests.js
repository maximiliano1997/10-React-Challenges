// import ReactDOM from 'react-dom'
import React from 'react'
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import './Tests.css'
import {useContext} from 'react';
import {DataContext} from './ContextProvider'




const Home = () => {
    return (
        <>
        <h1>Home page!</h1>
        <Link to="/search" className='search'>Search</Link>
        </>
    )
}


export const Search = () => {
    const data = useContext(DataContext) //gracias a CodingTube

    return (
        <div className='searchpage'>
        <h2>Search Page</h2>
        
            {data.nombres.map(name => (
                <p key={name}><Link to={`/nombres/${name}`} className='li'>{name}</Link></p>
            ))}
        
        <Link to='/' className="button">Back to Home Page</Link>
        </div>
    )
}



const Nombres = () => {
    const { name } = useParams()
    return (
        <div className='nombres'>
            {name} <Link to='detalles' className='see-details'>  See Details</Link>
            <Outlet />
            <Link to='/' className="button">Back to Home Page</Link>
        </div>
    )
}

const Detalles = () => {
const { name } = useParams()
    return (
        <div>
            <h1>This are the Details of Mr. {name}</h1>
        </div>
    )
}

export function Test() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/nombres/:name' element={<Nombres />}>
                <Route path="detalles" element={<Detalles />} />
            </Route>
        </Routes>
    )
}