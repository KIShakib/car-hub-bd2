import React, { useEffect, useState } from 'react';

const Order = ({ order, handleDelete, handleUpdate }) => {
    const [singleService, setSingleService] = useState({});
    const { serviceName, price, service, _id } = order;

    useEffect(() => {
        fetch(`http://localhost:5000/service/${service}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [service])

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="w-28 h-24">
                        <img className="w-full h-full rounded"
                            src={singleService?.img}
                            alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 text-xl font-bold whitespace-no-wrap">
                            {serviceName}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">$ {price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    Jan 21, 2020
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">Pending</span>
                </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn btn-xs rounded-xl">Action</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-slate-300 w-24 font-bold">
                        <li><button onClick={() => handleUpdate(_id)}>Update</button></li>
                        <li><button onClick={() => handleDelete(_id)}>Delete</button></li>
                    </ul>
                </div>
            </td>
        </tr>
    );
};

export default Order;