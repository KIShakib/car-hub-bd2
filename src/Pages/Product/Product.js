import React from 'react';
import { FaDollarSign, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, productName, photoURL, price } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 rounded-xl border-2 p-5 h-full">
            <figure className='relative overflow-hidden transition duration-200 transform shadow-lg border-r-8 border-red-600'><img className='h-56 rounded-lg ' src={photoURL} alt="Garage" /></figure>
            <div className="card-body">
                <h2 className="card-title font-mono text-2xl">{productName}</h2>
                <div className="card-actions absolute inset-0 pt-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-end">
                    <div className='bg-red-600 flex items-center w-full px-10 py-2'>
                        <p className='text-xl text-center flex items-center font-bold'>Price : <FaDollarSign> </FaDollarSign> {price}</p>
                        <Link><FaShoppingCart className='text-lg'></FaShoppingCart></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;