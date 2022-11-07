import React from 'react';
import { Blocks } from 'react-loader-spinner';
import Products from '../Products/Products';
import AwesomeSlider1 from './AwesomeSlider';
import Services from './Services/Services';
import logo from "../../Assets/Image/Logo/logo.jpg"




const Home = () => {
    return (
        <div>
            <div>
                <marquee behavior="" direction="" className="bg-red-500 rounded mb-2">
                    <h2 className='text-3xl font-extrabold text-cyan-800 font-mono'>
                        Car Hub BD
                    </h2>
                </marquee>
            </div>
            <div>
                <AwesomeSlider1 className="rounded-lg"></AwesomeSlider1>
            </div>

            <div className='flex flex-col justify-center items-center my-40'>
                <h1>About US Section Is Coming...</h1>
                <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                />
            </div>

            <div className='mb-40'>
                <Services></Services>
            </div>

            <div>
                <Products></Products>
            </div>

        </div>
    );
};

export default Home;