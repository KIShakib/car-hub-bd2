import React, { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';

const Order = ({ order, handleDelete, handleUpdate }) => {
    const [loading, setLoading] = useState(true)
    const [singleService, setSingleService] = useState({});
    const { serviceName, price, service, _id, status } = order;

    useEffect(() => {
        fetch(`https://car-hub-bd-server.vercel.app/service/${service}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data)
                setLoading(false);
            })
    }, [service])

    return (
        <>
            <div className='flex justify-center'>
                {
                    loading &&
                    <Blocks
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                    />

                }
            </div>
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
                        <span className="relative">{status}</span>
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
        </>
    );
};

export default Order;