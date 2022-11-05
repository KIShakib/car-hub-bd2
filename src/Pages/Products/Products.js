import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import { useLoaderData } from 'react-router-dom';

const Products = () => {
    // const products = useLoaderData()
    // console.log(products);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);
    return (
        <div>
            <div>
                <h2 className='text-center font-semibold text-orange-600 mb-2'>Products</h2>
                <h1 className='text-3xl text-center font-bold mb-4'>Buy Our Products</h1>
                <p className='w-1/2 mx-auto text-center'>Enjoy an entirely new level of driving experience with our in-depth selection of superior car bulbs, brake pads, spark plugs, and other automotive parts and accessories designed to keep your car running at its absolute best.</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;