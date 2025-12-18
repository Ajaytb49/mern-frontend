// mern-frontend/src/Nav.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductStyles.css'; // CRITICAL: Ensure this import is present

function Nav() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) setOpen(false);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className="nav-bar">
			<div className="nav-container">
				<Link to="/" className="brand-name">
					<span className="brand-text">Stationary World</span>
				</Link>

				<div className={`nav-center ${open ? 'open' : ''}`}>
					<div className="search-wrap">
						<input
							className="nav-search"
							type="search"
							placeholder="Search products, e.g. pen, notebook..."
							aria-label="Search products"
						/>
					</div>

					<nav className="nav-links-right">
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link to="/products" className="nav-link">
							Product
						</Link>
						{/* Add Product removed from nav as requested */}
                        <Link to="/cart" className="nav-link cart-link">
							Cart
						</Link>
						<Link to="/contect" className="nav-link">
							Contact
						</Link>
                        
					</nav>
				</div>

				<button
					className={`hamburger ${open ? 'is-active' : ''}`}
					onClick={() => setOpen(!open)}
					aria-label="Toggle menu"
				>
					{open ? (
						<svg className="menu-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M6 6L18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					) : (
						<svg className="menu-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 6h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M3 12h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					)}
				</button>
			</div>
		</header>
	);
}

export default Nav;