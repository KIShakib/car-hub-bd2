import React from 'react';
import { FaDollarSign, FaArrowRight } from 'react-icons/fa';

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 rounded-xl border-2 p-5 h-full">
                <figure><img className='h-56 rounded-lg border-r-8 border-red-600' src={img} alt="Garage" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <p className='text-xl text-red-600 flex items-center text-bold'>Price : <FaDollarSign> </FaDollarSign> {price}</p>
                        <FaArrowRight className='text-red-600'></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;