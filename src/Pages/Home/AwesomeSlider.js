import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../Assets/Image/Carousel/1.jpg";
import img2 from "../../Assets/Image/Carousel/2.jpg";
import img3 from "../../Assets/Image/Carousel/3.jpg";
import img4 from "../../Assets/Image/Carousel/4.jpg";
import img5 from "../../Assets/Image/Carousel/5.jpg";
import img6 from "../../Assets/Image/Carousel/6.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AwesomeSlider1 = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                <div className='h-72 rounded-lg' data-src={img1} />
                <div className='h-72 rounded-lg' data-src={img2} />
                <div className='h-72 rounded-lg' data-src={img3} />
                <div className='h-72 rounded-lg' data-src={img4} />
                <div className='h-72 rounded-lg' data-src={img5} />
                <div className='h-72 rounded-lg' data-src={img6} />
            </AutoplaySlider>
        </div>
    );
};

export default AwesomeSlider1;