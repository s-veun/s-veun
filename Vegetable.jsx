import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import slideCategory from "./slideCategory";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Vegetable = () => {
  return (
    <div className="container-fluid w-[95%] mx-auto mt-20">
      <h2 className="text-3xl mx-10">Fruit</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper p-2 h-[350px] rounded-xl bg-white"
        slidesPerView={6}
        spaceBetween={10}
      >
        {slideCategory.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              isPressable
              shadow="sm"
              onPress={() => console.log("Item pressed:", item.title)}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-cover"
                  radius="lg"
                  height= '200px'
                  shadow="sm"
                  src={item.img}
                  width="300px"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Vegetable;
