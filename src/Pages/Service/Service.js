import React from 'react';
import toast from 'react-hot-toast';
import { FaDollarSign, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <Link>
                <div className="card card-compact w-96 bg-base-100 rounded-xl border-2 p-5 h-full">
                    <figure className='relative overflow-hidden transition duration-200 transform shadow-lg'><img className='h-56 rounded-lg border-r-8 border-red-600' src={img} alt="Garage" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono text-2xl">{title}</h2>
                        <div className="card-actions absolute inset-0 pt-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-end">
                            <div className='bg-red-600 flex items-center w-full px-10'>
                                <p className='text-xl text-center flex items-center font-bold'>Price : <FaDollarSign> </FaDollarSign> {price}</p>
                                <Link onClick={()=> toast.success("Successfully Added")}><FaShoppingCart className='text-lg'></FaShoppingCart></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;