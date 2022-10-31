import img1 from "../../Assets/Image/Carousel/1.jpg";
import img2 from "../../Assets/Image/Carousel/2.jpg";
import img3 from "../../Assets/Image/Carousel/3.jpg";
import img4 from "../../Assets/Image/Carousel/4.jpg";
import img5 from "../../Assets/Image/Carousel/5.jpg";
import img6 from "../../Assets/Image/Carousel/6.jpg";
import CarouselItem from "./CarouselItem";


const carouselData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]



const Carousel = () => {

    return (
        <div className="carousel w-[80%] mx-auto py-10 h-full">
            {
                carouselData.map(carousel => <CarouselItem key={carousel.id} carousel={carousel}></CarouselItem>)
            }
        </div >
    );
};

export default Carousel;