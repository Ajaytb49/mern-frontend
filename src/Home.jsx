// mern-frontend/src/Home.jsx - FINAL CODE (Currency Fix)

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductStyles.css';

const Home = () => {
    // provided background image
    const bgUrl = 'https://tse4.mm.bing.net/th/id/OIP.t_Mp8AderadLz7hiZLMumwHaD-?pid=Api&P=0&h=180https://r.search.yahoo.com/_ylt=Awrx_o2yQ0Rpg6kGj1e9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2UyZDJlNDYxYjM1ZTExNTYwNzNlNDFhNjE1MmVlNmRlBGdwb3MDMTAyBGl0A2Jpbmc-/RV=2/RE=1766110258/RO=11/RU=https%3a%2f%2fpngtree.com%2ffreebackground%2fstudent-cartoon-poster-stationery-shop-quarter-card_921333.html/RK=2/RS=eAB06I3CqkiTpMWHS02UtIc4J9M-';

    return (
        <section className="hero-section" style={{ backgroundImage: `url(${bgUrl})` }}>
            <div className="hero-content">
                <h1>Welcome to the Startionary World</h1>
                <p className="hero-sub">Quality stationery for every idea and workspace</p>
                <Link to="/products" className="hero-button">Shop Now</Link>
            </div>
        </section>
    );
};

export default Home;