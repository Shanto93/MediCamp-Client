import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/Banners/medical camp banner.jpg'
import banner2 from '../../../assets/Banners/medical comp banner02.jpg'
import banner3 from '../../../assets/Banners/medical Camp banner 03.jpg'
import banner4 from '../../../assets/Banners/medical camps banner 04.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div className="md:h-[480px]">
                <img src={banner1} />
            </div>
            <div className="h-[480px]">
                <img src={banner2} />
            </div>
            <div className="h-[480px]">
                <img src={banner3} />
            </div>
            <div className="h-[480px]">
                <img src={banner4} />
            </div>
        </Carousel>
    );
};

export default Banner;