// mern-frontend/src/Product.jsx

import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import { productAPI } from './services/api';
import './ProductStyles.css';

const Product = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await productAPI.getAllProducts();
            setProducts(data);
            setError(null);
        } catch (err) {
            // console.error('Error fetching products:', err);
            // setError(`Failed to load products. Error: ${err.message}. Check if backend is running and reachable.`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Demo products shown when backend returns no products (does not affect backend)
    const demoProducts = [
        {
            _id: 'demo-1',
            name: 'Classic Fountain Pen',
            category: 'Pen',
            description: 'Smooth-writing fountain pen with ergonomic grip.',
            price: 60.0,
            stock: 12,
            image: 'https://tse2.mm.bing.net/th/id/OIP.LvqheFLtU8RqTYGtYryGNAHaEQ?pid=Api&P=0&h=180'
        },
        {
            _id: 'demo-2',
            name: 'Hardcover Notebook',
            category: 'Notebook',
            description: 'A5 size, 200 pages, dot-grid for note-taking and sketches.',
            price: 50.0,
            stock: 30,
            image: 'https://tse1.mm.bing.net/th/id/OIP.iidDOCKhO9JP9O_32y1omQHaHM?pid=Api&P=0&h=180'
        },
        {
            _id: 'demo-3',
            name: 'Gel Ink Roller',
            category: 'Pen',
            description: 'Quick-dry gel ink with comfortable rubber grip.',
            price: 10.0,
            stock: 30,
            image: 'https://tse4.mm.bing.net/th/id/OIP.IUcuvp-EcjBS1LkuyOQB0AAAAA?pid=Api&P=0&h=180'
        }
    ];

    // Always display demo products alongside backend products (demo first).
    // Merge and deduplicate by _id so backend items won't duplicate demo ones.
    const displayProducts = [
        ...demoProducts,
        ...((products && products.length > 0) ? products.filter(p => !demoProducts.some(d => d._id === p._id)) : [])
    ];

    const handleProductOperationComplete = () => {
        fetchProducts();
        handleCloseModal();
    };

    const handleDeleteProduct = async (id, name) => {
        if (!window.confirm(`Are you sure you want to delete product: ${name}?`)) return;
        try {
            await productAPI.deleteProduct(id);
            alert(`Product '${name}' deleted successfully.`);
            handleProductOperationComplete();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert(`Failed to delete product: ${error.message || 'Server error'}`);
        }
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleOpenModal = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    return (
        <div className="home-container">
            <div className="dashboard-header">
                <h1>Products</h1>
            </div>

            {(isModalOpen || editingProduct) && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close-btn" onClick={handleCloseModal}>&times;</button>
                        <ProductForm
                            onProductOperationComplete={handleProductOperationComplete}
                            editingProduct={editingProduct}
                            onCancelEdit={handleCloseModal}
                        />
                    </div>
                </div>
            )}

            <h2>Available Products</h2>

            {loading && <p>Loading products...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && products.length === 0 && <p></p>}

            <div className="product-list-grid">
                {displayProducts.map((product) => (
                    <div key={product._id} className="product-card">
                        <div className="product-image-container">
                            <img
                                src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                                alt={product.name}
                                className="product-image"
                            />
                        </div>

                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3>{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                        </div>

                        <div className="product-footer">
                            <span className="product-price">Rs {parseFloat(product.price).toFixed(2)}</span>
                            <span className="product-stock">Stock: {product.stock}</span>
                        </div>

                        <div className="product-actions">
                            <button onClick={() => handleEditClick(product)} className="action-btn edit-btn">
                                Edit
                            </button>
                            <button onClick={() => handleDeleteProduct(product._id, product.name)} className="action-btn delete-btn">
                                Delete
                            </button>
                            <button onClick={() => onAddToCart(product)} className="action-btn cart-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
