import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Crousel() {
    return (
        <div  className="flex flex-col  lg:h-[65vh] " >
            <Swiper noSwiping={true} loop={true} navigation={true} modules={[Navigation]}  className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <SwiperSlide><img src="/dummy/dummy-1.jpg" className="object-cover" /> <div className="flex absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent"></div></SwiperSlide>
                <SwiperSlide><img src="/dummy/dummy-2.jpg" className="object-cover" /> <div className="flex absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent"></div></SwiperSlide>
                <SwiperSlide><img src="/dummy/dummy-3.jpg" className="object-cover" /> <div className="flex absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent"></div></SwiperSlide>
                <SwiperSlide><img src="/dummy/dummy-4.jpg" className="object-cover" /> <div className="flex absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent"></div></SwiperSlide>
            </Swiper>
            
        </div>
    )
}

export default Crousel
