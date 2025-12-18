import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from './components/ProductForm';

const AddProduct = () => {
    const navigate = useNavigate();

    const handleComplete = () => {
        // After adding product, navigate to products list
        navigate('/products');
    };

    const handleCancel = () => {
        navigate('/products');
    };

    return (
        <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
            <ProductForm onProductOperationComplete={handleComplete} onCancelEdit={handleCancel} editingProduct={null} />
        </div>
    );
};

export default AddProduct;
