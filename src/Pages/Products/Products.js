import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
// import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://car-hub-bd-server.vercel.app/products")
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
            <div className='grid grid-cols-3 gap-4 my-14'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div>
                <Link to="/productspage">
                    <button className='btn btn-sm btn-outline btn-accent rounded-none flex mx-auto my-5'>More Products</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;