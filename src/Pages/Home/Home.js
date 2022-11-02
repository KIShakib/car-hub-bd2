import React from 'react';
import { Blocks } from 'react-loader-spinner';
import AwesomeSlider1 from './AwesomeSlider';
import Services from './Services/Services';




const Home = () => {
    return (
        <div>
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

            <div>
                <Services></Services>
            </div>


        </div>
    );
};

export default Home;