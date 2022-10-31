import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import AwesomeSlider1 from './AwesomeSlider';
import Services from './Services/Services';
// import Carousel from './Carousel';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div>
                <AwesomeSlider1 className="rounded-lg"></AwesomeSlider1>
            </div>

            <div className='text-center my-40'>
                <h1>About US Section Is Coming...</h1>
            </div>

            <div>
                <Services></Services>
            </div>

            
        </div>
    );
};

export default Home;