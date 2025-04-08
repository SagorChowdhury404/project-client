import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" srcset="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;