import React from "react";
import img1 from "../../assets/bn1.png";
import img2 from '../../assets/bn2.png'

const Banner = () => {
  return (
    <div className="container-fluid mx-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="grid grid-cols-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
          <div className="flex-col flex items-center">
            <h2 className="text-md text-center text-gray-100 p-5 ">
              Save 10% On Your First Order!
            </h2>
            <p className="text-xl text-gray-100 mx-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptatibus, dignissimos suscipit!
            </p>
            <button className="border-2 border-white text-white p-2 shadow-2xl font-bold rounded-full mt-2 hover:bg-gray-100 active:bg-gray-200 hover:text-sky-500">Promo Code 10%</button>
          </div>
          <img className="h-[310px]" src={img1} alt="" />
        </div>
        <div className="grid grid-cols-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl">
          <div className="flex-col flex items-center">
            <h2 className="text-md text-center text-gray-100 p-5 ">
              Free Delivery To Your Door!
            </h2>
            <p className="text-xl text-gray-100 mx-10 text-center">
              Collect a Basket Worth More Than AED 50 and Get Free Delivery*
            </p>
          </div>
          <img className="" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
