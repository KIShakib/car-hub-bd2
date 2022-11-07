import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import Product from '../Product/Product';

const ProductsPage = () => {
    // const products = useLoaderData();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const productPerPage = 6;
    const totalPages = Math.ceil(productCount / productPerPage);
    console.log(totalPages);

    useEffect(() => {
        fetch(`https://car-hub-bd-server.vercel.app/productsByPagination?currentPage=${currentPage}&productPerPage=${productPerPage}`)
            .then(res => res.json())
            .then(data => {
                setProductCount(data.totalProducts);
                setProducts(data.products)
            })

    }, [currentPage]);


    const handlePreviews = num => {
        if (currentPage === 0) {
            return toast.error("No More Previews Page...")
        }
        setCurrentPage(currentPage - num);
    }
    const handleNext = num => {
        if ((currentPage + 1) === totalPages) {
            return toast.error("No More Pages...")
        }
        setCurrentPage(currentPage + num);
    }

    return (
        <div>
            <div>
                <h2 className='text-center font-semibold text-orange-600 mb-2'>Products</h2>
                <h1 className='text-3xl text-center font-bold mb-4'>Buy Our Products</h1>
                <p className='w-1/2 mx-auto text-center'>Enjoy an entirely new level of driving experience with our in-depth selection of superior car bulbs, brake pads, spark plugs, and other automotive parts and accessories designed to keep your car running at its absolute best.</p>
            </div>

            <div>
                <div className='grid grid-cols-3 gap-4 mt-14'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <div>
                    <div className="btn-group flex justify-center mt-4 mb-10">
                        <button onClick={() => handlePreviews(1)} className="btn">Previews</button>
                        {
                            [...Array(totalPages).keys()].map(num =>
                                <button
                                    key={num}
                                    onClick={() => setCurrentPage(num)}
                                    className={`btn ${currentPage === num && "btn-primary"}`}>
                                    {num + 1}
                                </button>)
                        }
                        <button onClick={() => handleNext(1)} className="btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;