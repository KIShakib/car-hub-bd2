import React from 'react';
import AwesomeSlider1 from './AwesomeSlider';
import Services from './Services/Services';


const Home = () => {
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