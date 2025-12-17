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
					<span className="hamburger-line" />
					<span className="hamburger-line" />
					<span className="hamburger-line" />
				</button>
			</div>
		</header>
	);
}

export default Nav;