import React, { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://car-hub-bd-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, []);
    return (
        <div>
            <div>
                <h2 className='text-center font-semibold text-orange-600 mb-5'>Services</h2>
                <h2 className='text-3xl text-center font-bold'>Our Service Area</h2>
                <p className='text-center my-4'>We service all kind of cars. We fixed problems as like as car-hub.<br />Your car is always safe under our mechanics...</p>
            </div>
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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div>
                <button className='btn btn-sm btn-outline btn-accent rounded-none flex mx-auto my-5'>More Services</button>
            </div>
        </div>
    );
};

export default Services;