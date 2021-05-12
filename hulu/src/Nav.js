import React from 'react';
import './Nav.css';
import requests from './requests';

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2>Romance</h2>
            <h2>Mystery</h2>
            <h2>Sci-fi</h2>
            <h2>Western</h2>
            
        </div>
    )
}

export default Nav;
