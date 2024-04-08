import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

import { Autoplay, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
             <Swiper
                // slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2000
                }}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/tQsXMWh/view-from-balcony-apartment.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/T0JkV20/istockphoto-1448385933-1024x1024.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/XWg8SsB/rural-house-surroundings-daylight.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/s59LhkM/modern-luxury-domestic-room-comfortable-relaxation-generative-ai.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/jbg53CY/cafe-living-room-loft-style.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/4NGdbNH/beautiful-umbrella-chair-around-swimming-pool-hotel-resort.jpg')]">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;