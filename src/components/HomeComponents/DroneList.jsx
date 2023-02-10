import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const DroneList = ({ data, setSelectedDroneId, styling }) => {


  const handlePress = (id) => {
    setSelectedDroneId(id);
  };


  

  return (
    <div className="">
        <h1 className="mb-4 text-lightpeach text-center text-lg font-bold">
            Drones
        </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
        {data?.map((val) => {
          const { drone_id, drone_name } = val;

          return (
            <SwiperSlide className="p-2">
              <div
                key={drone_id}
                className="ml-4  shadow-md rounded-2xl "
              >
                <button className="p-2 text-darkblue bg-lightpurple font-bold rounded-2xl  w-full" onClick={() => handlePress(drone_id)}>
                 {drone_name}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DroneList;
